import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_API_AuthDomain,
  projectId: import.meta.env.VITE_API_ProjectId,
  storageBucket: import.meta.env.VITE_API_StorageBucket,
  messagingSenderId: import.meta.env.VITE_API_MessagingSenderId,
  appId: import.meta.env.VITE_API_AppId,
  measurementId:  import.meta.env.VITE_API_MeasurementId,
};

//  To intializing firebase
const app = initializeApp(firebaseConfig);

// To intializing firebase Auth
export const auth = getAuth(app);

//  To intializing firestore
export const db = getFirestore(app);

// To create firebase storage
export const storage = getStorage(app);
