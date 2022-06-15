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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = auth.signInWithPopup(provider);

export default firebase;