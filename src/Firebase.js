import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPvxjueAvL6n9QvSFJyWNL3e6RhGETij4",
  authDomain: "twitterclone-ae23b.firebaseapp.com",
  projectId: "twitterclone-ae23b",
  storageBucket: "twitterclone-ae23b.appspot.com",
  messagingSenderId: "701270442000",
  appId: "1:701270442000:web:91e59352804cd06a850a95"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db