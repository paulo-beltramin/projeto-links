
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDShsjtEZCC87FzQzTeuiaV9ElJp9pihss",
  authDomain: "projeto-links-69195.firebaseapp.com",
  projectId: "projeto-links-69195",
  storageBucket: "projeto-links-69195.firebasestorage.app",
  messagingSenderId: "221495468943",
  appId: "1:221495468943:web:f20799361c49cdd102e1fa"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

export {
    auth,
    db
}