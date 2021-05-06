import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDIz-ehP8yh3AjT7LWT0pws6AFj1kUpBDk",
    authDomain: "disneyplus-clone-f085b.firebaseapp.com",
    projectId: "disneyplus-clone-f085b",
    storageBucket: "disneyplus-clone-f085b.appspot.com",
    messagingSenderId: "920857994853",
    appId: "1:920857994853:web:e61fd97231887bca66888c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage}
export default db;