import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBwqwIQbkrXC8Ob8kQJPTmXsLnkvrIkL0g',
  authDomain: 'deneme1-5d236.firebaseapp.com',
  projectId: 'deneme1-5d236',
  storageBucket: 'deneme1-5d236.appspot.com',
  messagingSenderId: '529602431118',
  appId: '1:529602431118:web:b83cc79a336bb4a3a621df',
  measurementId: 'G-M44M13K7WF',
};

/*const email= "tunahanyildiz291@homtial.com";
const password= "hebele";
*/

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

const App = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const onEmailChange = () => {
    
  }

  return (
    <div>
      <input
        type="email"
        name="email"
        onChange={handleChange}
        value={email}
      />

      <input
        type="text"
        name="pass"
        onChange={handleChange}
        value={pass}
      />

      <h2>Email: {email}</h2>
      <h2>Password: {pass}</h2>
    </div>
  );
};

export default App;
