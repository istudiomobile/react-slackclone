import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyAOPfmLZnpVcvXpxPDUlHeeFSJu8XYjurE",
  authDomain: "shining-fire-2194.firebaseapp.com",
  databaseURL: "https://shining-fire-2194.firebaseio.com",
  projectId: "shining-fire-2194",
  storageBucket: "shining-fire-2194.appspot.com",
  messagingSenderId: "538589817546"
};
firebase.initializeApp(config);

  export default firebase;