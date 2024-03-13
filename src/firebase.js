import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyB6MPTHXHA6CxkuRPyrcVXAeZ2BCxH7KYs",
  authDomain: "rtk-blog-31076.firebaseapp.com",
  projectId: "rtk-blog-31076",
  storageBucket: "rtk-blog-31076.appspot.com",
  messagingSenderId: "624738760124",
  appId: "1:624738760124:web:34a5063743f5451f76e7b9"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)