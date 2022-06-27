import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp( {
    apiKey: "AIzaSyBZjZGB0AofTuVGDndZcBqbVv3FxuL9LNc",
    authDomain: "tabgram-4a001.firebaseapp.com",
    projectId: "tabgram-4a001",
    storageBucket: "tabgram-4a001.appspot.com",
    messagingSenderId: "70074668597",
    appId: "1:70074668597:web:24d3df0f9aa3bc681dc37c",
    measurementId: "G-FJ4CMGWEG4"
  }).auth();