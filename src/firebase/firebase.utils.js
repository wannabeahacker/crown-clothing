import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAQT8wFsriZbxC_wnW1r1ZA78ElLPkmLps",
  authDomain: "crown-db-e85e2.firebaseapp.com",
  databaseURL: "https://crown-db-e85e2.firebaseio.com",
  projectId: "crown-db-e85e2",
  storageBucket: "crown-db-e85e2.appspot.com",
  messagingSenderId: "184176775539",
  appId: "1:184176775539:web:cd5ba9d96adb507ab6b506",
  measurementId: "G-QBBR37GY9X"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
