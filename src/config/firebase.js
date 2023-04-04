import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBUsjVOpCR85Sv5hmqtX0jqHU0SFVUcJYE",
  authDomain: "tiktok-fake-15e75.firebaseapp.com",
  projectId: "tiktok-fake-15e75",
  storageBucket: "tiktok-fake-15e75.appspot.com",
  messagingSenderId: "876786262355",
  appId: "1:876786262355:web:9483ce6f120ac7479d81a6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;