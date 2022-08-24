import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAVPDnkmbu_Zsud4-9YHsyu-ozA4ycFo-Y",
  authDomain: "linkedin-clone-2bf2f.firebaseapp.com",
  projectId: "linkedin-clone-2bf2f",
  storageBucket: "linkedin-clone-2bf2f.appspot.com",
  messagingSenderId: "607597784492",
  appId: "1:607597784492:web:03e1fdcf1e6727460c1e09",
  measurementId: "G-66PELB38QV",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { auth, provider, storage };
export default db;
