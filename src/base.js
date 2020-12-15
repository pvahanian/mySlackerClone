import firebase from "firebase/app";
import "firebase/auth"
import 'firebase/firestore'

//export const firestore = firebase.firestore();

// const fireApp = firebase.initializeApp({
//     apiKey:process.env.REACT_APP_FIREBASE_KEY,
//     authDomain:process.env.REACT_APP_FIREBASE_DOMAIN,
//     databaseUrl:process.env.REACT_APP_FIREBASE_DATABASE,
//     projectId:process.env.REACT_APP_FIREBASE_KEY_PROJECT_ID,
//     storageBucket:process.env.REACT_APP_FIREBASE_KEY_STORAGE_BUCKET,
//     messagingSenderId:process.env.REACT_APP_FIREBASE_KEY_SENDER_ID
// })

const fireApp = firebase.initializeApp({
    apiKey: "AIzaSyBQtJTB83Itj3MBI1cXtP0gp59h_Z9ekh0",
    authDomain: "textapp-ecc6b.firebaseapp.com",
    databaseURL: "https://textapp-ecc6b.firebaseio.com",
    projectId: "textapp-ecc6b",
    storageBucket: "textapp-ecc6b.appspot.com",
    messagingSenderId: "902098712309",
    appId: "1:902098712309:web:033167eae4500a3d2a37bc",
})

export default fireApp;