import firebase from "firebase"
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBwVqEg8AFZLi7YSvpbu4kYMPq2PHeokuM",
    authDomain: "messenger-clone-e0d57.firebaseapp.com",
    projectId: "messenger-clone-e0d57",
    storageBucket: "messenger-clone-e0d57.appspot.com",
    messagingSenderId: "5456533400",
    appId: "1:5456533400:web:5449ef41b54e5fd8fdfded",
    measurementId: "G-KPZ27BRBHJ"
})
const db = firebaseApp.firestore()

export default db
