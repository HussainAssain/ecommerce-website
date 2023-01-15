import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDBc-oclyfUgWM8dMJpAIE8DL8HpOR7kg8",
  authDomain: "ecommercefarm-e1cfa.firebaseapp.com",
  projectId: "ecommercefarm-e1cfa",
  storageBucket: "ecommercefarm-e1cfa.appspot.com",
  messagingSenderId: "366373948478",
  appId: "1:366373948478:web:b6f0b885ae02c4a78f556f",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export { auth, fs, storage };
