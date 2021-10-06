import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBfTanjSpyMxeKQLaG75v_gFHPYha8pyU0",
  authDomain: "disneyplus-74cfd.firebaseapp.com",
  projectId: "disneyplus-74cfd",
  storageBucket: "disneyplus-74cfd.appspot.com",
  messagingSenderId: "388612057829",
  appId: "1:388612057829:web:89dc879801d699dded020c",
  measurementId: "G-9FVKLYLZ42"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
