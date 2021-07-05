import firebase from "firebase";

const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "AUTH_DOMAIN",
  projectId: "PROJECT_ID",
  storageBucket: "STORAGE_BUCKET",
  messagingSenderId: "MESSAGE_SENDER_ID",
  appId: "APP_ID",
  measurementId: "MEASUREMENT_ID",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseDb = firebaseApp.firestore();
const firebaseAuth = firebase.auth();

export { firebaseDb, firebaseAuth };
