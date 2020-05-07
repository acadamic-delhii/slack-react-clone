import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyBggrh2ptvFr17z5flgwryikZ20fwtOQyE",
    authDomain: "react-slack-clone-962b8.firebaseapp.com",
    databaseURL: "https://react-slack-clone-962b8.firebaseio.com",
    projectId: "react-slack-clone-962b8",
    storageBucket: "react-slack-clone-962b8.appspot.com",
    messagingSenderId: "426138990922",
    appId: "1:426138990922:web:f725ab71c630e4c0a8e9b3",
    measurementId: "G-4RN40XGQ4Z"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  export default firebase;