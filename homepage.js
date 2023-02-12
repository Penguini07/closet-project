/*// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhrvdQNBPs3NtHwpdu-xtZgPXs8XNE-Zs",
  authDomain: "green-closet.firebaseapp.com",
  projectId: "green-closet",
  storageBucket: "green-closet.appspot.com",
  messagingSenderId: "677963178663",
  appId: "1:677963178663:web:fde8af4314ec3bb520f182",
  measurementId: "G-QN64BVJMS8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth();
//sign up user

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
//sign in user
signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });

signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
*/
function OpenForm(type) {
    if(type==='signup'){
        document.getElementById("signUp").style.display = "block";
    } else if(type==="login"){
        document.getElementById("logIn").style.display = "block";
    }
}; 
function CloseForm(type) {
    if(type==='signup'){
        document.getElementById("signUp").style.display = "none";
    }
    else if(type==="login"){
        document.getElementById("logIn").style.display = "none";
    }
  };
/*
function SignUp() {
    const email = document.getElementById("SUemail").value;
    const password = document.getElementById("SUemail").value;
    createUserWithEmailAndPassword(email,password);
};

function LogIn() {
    const email = document.getElementById("LIemail").value;
    const password = document.getElementById("LIemail").value;
    createUserWithEmailAndPassword(email,password);
};*/