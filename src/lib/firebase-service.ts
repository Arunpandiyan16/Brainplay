
import { db, auth } from './firebase';
import { doc, setDoc, getDoc, updateDoc, collection, getDocs, query, orderBy, limit, runTransaction } from 'firebase/firestore';
import type { User } from 'firebase/auth';

export interface GameProgress {
    score: number;
    level: number;
    xp: number;
    xpToNextLevel: number;
    lives: number;
    nextLifeAt: number | null;
}

export interface UserProfile {
    uid: string;
    email: string | null;
    displayName: string;
    totalScore: number;
    quizClash: GameProgress;
    wordHunter: GameProgress;
    mathRush: GameProgress;
    logicLeap: GameProgress;
    memoryFlip: GameProgress;
    spotFakeNews: GameProgress;
    dailyChallenge: {
        score: number;
    };
}

const MAX_LIVES = 3;
const LIFE_REGEN_MINUTES = 5;

export const defaultGameProgress = (level = 1): Required<GameProgress> => ({
    score: 0,
    level: level,
    xp: 0,
    xpToNextLevel: 50 + (level - 1) * 25,
    lives: MAX_LIVES,
    nextLifeAt: null,
});

export const createUserProfile = async (user: User) => {
    const userRef = doc(db, 'users', user.uid);
    const userProfile: UserProfile = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName || user.email?.split('@')[0] || 'BrainviaPlayer',
        totalScore: 0,
        quizClash: defaultGameProgress(),
        wordHunter: defaultGameProgress(),
        mathRush: defaultGameProgress(),
        logicLeap: defaultGameProgress(),
        memoryFlip: defaultGameProgress(),
        spotFakeNews: defaultGameProgress(),
        dailyChallenge: { score: 0 },
    };
    await setDoc(userRef, userProfile);
    return userProfile;
};

// This function now also handles life regeneration.
export const getUserProfile = async (uid: string): Promise<UserProfile | null> => {
    const userRef = doc(db, 'users', uid);
    try {
        const docSnap = await getDoc(userRef);
        let userProfile: UserProfile;

        if (docSnap.exists()) {
            userProfile = docSnap.data() as UserProfile;
        } else {
            console.log("No such document! Creating profile for new user.");
            const currentUser = auth.currentUser;
            if (currentUser && currentUser.uid === uid) {
                userProfile = await createUserProfile(currentUser);
            } else {
                return null;
            }
        }
        
        // Check and regenerate lives if needed
        let needsUpdate = false;
        const updates: { [key: string]: any } = {};
        const now = Date.now();

        const gameKeys: (keyof UserProfile)[] = ['quizClash', 'wordHunter', 'mathRush', 'logicLeap', 'memoryFlip', 'spotFakeNews'];

        for (const gameKey of gameKeys) {
            const game = userProfile[gameKey] as GameProgress;
            if (game && game.lives < MAX_LIVES && game.nextLifeAt && now >= game.nextLifeAt) {
                const regeneratedLives = Math.floor((now - game.nextLifeAt) / (LIFE_REGEN_MINUTES * 60 * 1000)) + 1;
                const newLives = Math.min(MAX_LIVES, game.lives + regeneratedLives);
                
                updates[`${gameKey}.lives`] = newLives;
                updates[`${gameKey}.nextLifeAt`] = newLives < MAX_LIVES ? game.nextLifeAt + (regeneratedLives * LIFE_REGEN_MINUTES * 60 * 1000) : null;
                
                // Apply changes to the local object to return the most up-to-date data
                (userProfile[gameKey] as GameProgress).lives = newLives;
                (userProfile[gameKey] as GameProgress).nextLifeAt = updates[`${gameKey}.nextLifeAt`];
                needsUpdate = true;
            }
        }

        if (needsUpdate) {
            await updateDoc(userRef, updates);
        }

        return userProfile;

    } catch (error) {
        console.error("Error getting user profile:", error);
        return null;
    }
};

export const updateUserProfile = async (uid: string, data: Partial<UserProfile>) => {
    const userRef = doc(db, 'users', uid);
    await updateDoc(userRef, data);
};

export const updateGameProgress = async (uid: string, game: keyof Omit<UserProfile, 'uid' | 'email' | 'displayName' | 'totalScore' | 'dailyChallenge'>, progress: Partial<GameProgress>) => {
    const userRef = doc(db, 'users', uid);

    try {
        await runTransaction(db, async (transaction) => {
            const userDoc = await transaction.get(userRef);
            if (!userDoc.exists()) {
                throw "User profile does not exist, cannot update progress.";
            }

            const userProfile = userDoc.data() as UserProfile;
            const currentGameProgress = userProfile[game] || defaultGameProgress();
            
            const oldScore = currentGameProgress.score;
            const newScore = progress.score ?? oldScore;
            const scoreDifference = newScore - oldScore;
            
            const newTotalScore = (userProfile.totalScore || 0) + scoreDifference;
            
            const newLives = progress.lives ?? currentGameProgress.lives;
            let newNextLifeAt = progress.nextLifeAt !== undefined ? progress.nextLifeAt : currentGameProgress.nextLifeAt;

            // If a life was just lost, and no regeneration timer is set, set one.
            if (newLives < currentGameProgress.lives && newLives < MAX_LIVES && !currentGameProgress.nextLifeAt) {
                 newNextLifeAt = Date.now() + LIFE_REGEN_MINUTES * 60 * 1000;
            }


            const finalProgress: GameProgress = {
                score: newScore,
                level: progress.level ?? currentGameProgress.level,
                xp: progress.xp ?? currentGameProgress.xp,
                xpToNextLevel: progress.xpToNextLevel ?? currentGameProgress.xpToNextLevel,
                lives: newLives,
                nextLifeAt: newNextLifeAt,
            };

            const updates = {
                totalScore: newTotalScore,
                [game]: finalProgress,
            };
            
            transaction.update(userRef, updates);
        });
    } catch (e) {
        console.error("Transaction failed: ", e);
    }
};


export const getLeaderboard = async (limitCount = 10): Promise<UserProfile[]> => {
    const usersRef = collection(db, 'users');
    const q = query(usersRef, orderBy('totalScore', 'desc'), limit(limitCount));
    const querySnapshot = await getDocs(q);
    const leaderboard: UserProfile[] = [];
    querySnapshot.forEach((doc) => {
        leaderboard.push(doc.data() as UserProfile);
    });
    return leaderboard;
};
