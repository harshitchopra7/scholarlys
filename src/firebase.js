import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBxo0PvRzgws3WZQ8uT6KRY4iEq33b1iUk",
    authDomain: "scholarlys-sch.firebaseapp.com",
    projectId: "scholarlys-sch",
    storageBucket: "scholarlys-sch.appspot.com",
    messagingSenderId: "646127087513",
    appId: "1:646127087513:web:fe1b93eedf50418ba96d08",
    measurementId: "G-JG5Y7M37HK"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig); 
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { db, auth, provider };
