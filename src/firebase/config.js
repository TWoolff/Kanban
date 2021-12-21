import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA8dT8d9sdAN7V22b36gLv43PNBFv8rk1s",
  authDomain: "kanban-899a6.firebaseapp.com",
  projectId: "kanban-899a6",
  storageBucket: "kanban-899a6.appspot.com",
  messagingSenderId: "886080384359",
  appId: "1:886080384359:web:155f6e8e0bd0fc75f2d3c2",
  measurementId: "G-9R5EWPMFDQ"
};

// init firebase
firebase.initializeApp(firebaseConfig)

//init firestore sevice
const projectFirestore = firebase.firestore()

export { projectFirestore }