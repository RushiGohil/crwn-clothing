import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyB7jzPqTBYuwiiSj7DofBzcL7lugGOjXi0",
    authDomain: "crwn-db-1818.firebaseapp.com",
    projectId: "crwn-db-1818",
    storageBucket: "crwn-db-1818.appspot.com",
    messagingSenderId: "140600214189",
    appId: "1:140600214189:web:a776fb13a7d96ed10d7c24",
    measurementId: "G-NSF76HQHGB"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error occurred while creating user ', error.message);
        }
    }
    return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;