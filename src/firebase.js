import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDUadYJ5VTRrfOMs4A18F6WKVIyr_5-ekk",
    authDomain: "amz-clone-96687.firebaseapp.com",
    databaseURL: "https://amz-clone-96687.firebaseio.com",
    projectId: "amz-clone-96687",
    storageBucket: "amz-clone-96687.appspot.com",
    messagingSenderId: "362887409240",
    appId: "1:362887409240:web:0e4f6dbb2453dc1fac642d",
    measurementId: "G-XT5FFKQ7H8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
