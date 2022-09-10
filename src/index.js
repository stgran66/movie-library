import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
  orderBy,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCZI3-U0x6PGOl7WQ8d3XufBMDWVcK2VUM',
  authDomain: 'movies-library-4190e.firebaseapp.com',
  projectId: 'movies-library-4190e',
  storageBucket: 'movies-library-4190e.appspot.com',
  messagingSenderId: '459026159567',
  appId: '1:459026159567:web:a7d96b37414d1695c5a4ba',
};
//Init firebase
initializeApp(firebaseConfig);
// Init services
const auth = getAuth();

// Signing users
const signupForm = document.querySelector('.signup');
signupForm.addEventListener('submit', e => {
  e.preventDefault();

  const email = signupForm.email.value;
  const password = signupForm.password.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(cred => {
      console.log('user created:', cred.user);
      signupForm.reset();
      document.querySelector('.whenLoggedIn').style.display = 'block';
      document.querySelector('.whenLoggedOut').style.display = 'none';
    })
    .catch(err => {
      console.log(err.message);
    });
});
