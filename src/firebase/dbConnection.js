import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALp-2aUHep9MnKx9Dd6WOKn0r0RL5aF0k",
  authDomain: "curso-react-inclusive-shop.firebaseapp.com",
  projectId: "curso-react-inclusive-shop",
  storageBucket: "curso-react-inclusive-shop.appspot.com",
  messagingSenderId: "224363064054",
  appId: "1:224363064054:web:1c13ca9ea4ec1ab2bfdad7"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);