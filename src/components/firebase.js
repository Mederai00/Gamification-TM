import firebase from "firebase";
// import "firebase/firebase-auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyAF3kPa4ujZyVks2R0N_OjRYukrUp0n4q8",
  authDomain: "quizg-70c7e.firebaseapp.com",
  projectId: "quizg-70c7e",
  storageBucket: "quizg-70c7e.appspot.com",
  messagingSenderId: "2730611149",
  appId: "1:2730611149:web:1ea12529b3f688ef1d3484",
  measurementId: "G-8WPTZEBEXH",
});

export const auth = app.auth();

export default app;
