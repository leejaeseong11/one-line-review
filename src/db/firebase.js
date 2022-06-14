// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD2xtZEAaw3dlQmdwB3XczkpQRK7QkK8YU',
  authDomain: 'one-line-review.firebaseapp.com',
  projectId: 'one-line-review',
  storageBucket: 'one-line-review.appspot.com',
  messagingSenderId: '851647674916',
  appId: '1:851647674916:web:b07cebb5019949a1bef6b1',
  measurementId: 'G-P93H2PVBRH',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
