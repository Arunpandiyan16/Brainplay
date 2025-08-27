
import { db, auth } from './firebase';
import { doc, setDoc, getDoc, updateDoc, collection, getDocs, query, orderBy, limit, runTransaction } from 'firebase/firestore';
import type { User } from 'firebase/auth';

export interface GameProgress {
    score: number;
    level: number;
    xp: number;
    xpToNextLevel: number;
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

export const defaultGameProgress = (): GameProgress => ({
    score: 0,
    level: 1,
    xp: 0,
    xpToNextLevel: 50,
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
};

export const getUserProfile = async (uid: string): Promise<UserProfile | null> => {
    const userRef = doc(db, 'users', uid);
    try {
        const docSnap = await getDoc(userRef);

        if (docSnap.exists()) {
            return docSnap.data() as UserProfile;
        } else {
            console.log("No such document! Creating profile for new user.");
            const currentUser = auth.currentUser;
            if (currentUser && currentUser.uid === uid) {
                await createUserProfile(currentUser);
                const newDocSnap = await getDoc(userRef);
                if (newDocSnap.exists()) {
                    return newDocSnap.data() as UserProfile;
                }
            }
            return null; // Return null if user isn't found or something went wrong.
        }
    } catch (error) {
        console.error("Error getting user profile:", error);
        // In case of a network error or other issues, returning null is safer.
        return null;
    }
};

export const updateUserProfile = async (uid: string, data: Partial<UserProfile>) => {
    const userRef = doc(db, 'users', uid);
    await updateDoc(userRef, data);
};

export const updateGameProgress = async (uid: string, game: keyof Omit<UserProfile, 'uid' | 'email' | 'displayName' | 'totalScore'>, progress: Partial<GameProgress>) => {
    const userRef = doc(db, 'users', uid);

    try {
        await runTransaction(db, async (transaction) => {
            const userDoc = await transaction.get(userRef);
            if (!userDoc.exists()) {
                // If for some reason the profile doesn't exist, we can't update it.
                // The getUserProfile function should prevent this, but it's good practice.
                console.error("User profile does not exist, cannot update progress.");
                return;
            }

            const userProfile = userDoc.data() as UserProfile;
            const currentGameProgress = userProfile[game] as GameProgress;

            // Calculate the difference in score to be added to the total score.
            // This is crucial for keeping the total score in sync.
            const oldScore = currentGameProgress.score || 0;
            const newScore = progress.score !== undefined ? progress.score : oldScore;
            const scoreDifference = newScore - oldScore;
            
            const newTotalScore = (userProfile.totalScore || 0) + scoreDifference;
            
            // Prepare the updates
            const updates: { [key: string]: any } = {};
            
            // Update the specific game's progress
            Object.keys(progress).forEach(key => {
                updates[`${game}.${key}`] = (progress as any)[key];
            });
            
            // Update the total score
            updates.totalScore = newTotalScore;
            
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
