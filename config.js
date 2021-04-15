import firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyC2Riphm6BUnyPYRwJS2ETuWwfhya9nOh4",
    authDomain: "self-design-86ba1.firebaseapp.com",
    projectId: "self-design-86ba1",
    storageBucket: "self-design-86ba1.appspot.com",
    messagingSenderId: "890112609414",
    appId: "1:890112609414:web:df033dc451fbc6c1cd9507"
};
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();