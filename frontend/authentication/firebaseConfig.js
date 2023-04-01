// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBTlOTBA_IljcbNlImhrTWi2F9VSMB7zGY',
  authDomain: 'bathhack-23.firebaseapp.com',
  projectId: 'bathhack-23',
  storageBucket: 'bathhack-23.appspot.com',
  messagingSenderId: '767853222474',
  appId: '1:767853222474:web:c19751ccb4a902ce5524b3',
  measurementId: 'G-WNFKG9H3B2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
