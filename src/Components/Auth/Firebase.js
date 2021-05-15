import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_Api_Key,
    authDomain: process.env.REACT_APP_FIREBASE_Auth_Domain,
    projectId: process.env.REACT_APP_FIREBASE_Project_Id,
    storageBucket: process.env.REACT_APP_FIREBASE_Storage_Bucket,
    messagingSenderId: process.env.REACT_APP_FIREBASE_Messaging_SenderId,
    appId: process.env.REACT_APP_FIREBASE_App_Id
};

export const initialization = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
}

export const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    return firebase.auth()
        .signInWithPopup(provider)
        .then(result => {
            const user = result.user
            return user;
        })
        .catch(err => console.log("error :", err))
}