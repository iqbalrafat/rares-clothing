import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBVtksS2cqY8hELQ6BAXJICiTYlHZmwiFo",
  authDomain: "rares-clothing.firebaseapp.com",
  projectId: "rares-clothing",
  storageBucket: "rares-clothing.appspot.com",
  messagingSenderId: "240066967285",
  appId: "1:240066967285:web:80adbfcd2321893167f7bc",
};

firebase.initializeApp(config);
