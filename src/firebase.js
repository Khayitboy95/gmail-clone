import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCBCYYlTwPtFnclR6dGjLonqfEcoFDZUik",
    authDomain: "clone-2cde5.firebaseapp.com",
    projectId: "clone-2cde5",
    storageBucket: "clone-2cde5.appspot.com",
    messagingSenderId: "459280053128",
    appId: "1:459280053128:web:a86abc60607d6123f0403d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };