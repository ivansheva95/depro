import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyATtjCTU9jhrM-aVY1_K1YOZVrMyFjtflg",
  authDomain: "depro-8404b.firebaseapp.com",
  projectId: "depro-8404b",
  storageBucket: "depro-8404b.appspot.com",
  messagingSenderId: "955064511987",
  appId: "1:955064511987:web:f61aeb046e617a23c6f686"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)
