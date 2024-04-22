import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  // Your Firebase configuration goes here
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };