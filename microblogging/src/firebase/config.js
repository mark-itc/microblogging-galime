import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { getFirestore } from "firebase/firestore";
// import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAv794hjGEwg9aApL-zBXJsUn3J-6jkX-k",
    authDomain: "microblogging-project-999c1.firebaseapp.com",
    databaseURL: "https://microblogging-project-999c1-default-rtdb.firebaseio.com",
    projectId: "microblogging-project-999c1",
    storageBucket: "microblogging-project-999c1.appspot.com",
    messagingSenderId: "924728006198",
    appId: "1:924728006198:web:7583fbe8cb3f43ea4f6a97"
  };
//   init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
export {projectFirestore}