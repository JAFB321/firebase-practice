import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtZemwu-9-1EJLosz6CAOWBCgrFNrWW3E",
  authDomain: "curso-firebase-97e87.firebaseapp.com",
  projectId: "curso-firebase-97e87",
  storageBucket: "curso-firebase-97e87.appspot.com",
  messagingSenderId: "103806108283",
  appId: "1:103806108283:web:d6a36de003117a39c458de",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
