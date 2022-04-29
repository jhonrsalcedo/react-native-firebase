import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAHL2leqEU2uXL8M19yTzID_xzyovGqJBc',
  authDomain: 'rn-crud-firebase.firebaseapp.com',
  projectId: 'rn-crud-firebase',
  storageBucket: 'rn-crud-firebase.appspot.com',
  messagingSenderId: '942498662459',
  appId: '1:942498662459:web:433e632416eea2ca01741e'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
