import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyApQA63cZPxAeE1jJju9xGtktF5gZ3Wgdk",
    authDomain: "slack-clone-6e758.firebaseapp.com",
    projectId: "slack-clone-6e758",
    storageBucket: "slack-clone-6e758.appspot.com",
    messagingSenderId: "173206859775",
    appId: "1:173206859775:web:6adeb6410ec3087f8a01ca"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider, db};