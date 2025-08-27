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
        displayName: user.displayName || user.email?.split('@')[0] || 'BrainPlayer',
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

export const updateGameProgress = async (uid: string, game: keyof UserProfile, progress: Partial<GameProgress | {score: number}>) => {
    const userRef = doc(db, 'users', uid);
    const userProfile = await getUserProfile(uid);

    if (userProfile) {
        const updates: any = {};
        let scoreDifference = 0;

        if ('score' in progress && progress.score !== undefined) {
            const currentGame = userProfile[game] as GameProgress | { score: number };
            if (currentGame && 'score' in currentGame) {
                scoreDifference = progress.score - currentGame.score;
            }
        }
        
        Object.keys(progress).forEach(key => {
            updates[`${game}.${key}`] = (progress as any)[key];
        });

        if (scoreDifference !== 0) {
            updates.totalScore = (userProfile.totalScore || 0) + scoreDifference;
        }

        await updateDoc(userRef, updates);
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
