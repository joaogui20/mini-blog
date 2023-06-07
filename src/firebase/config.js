// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAisjK8CUGmZgSs0uLmMXiNylarMcERYPE",
  authDomain: "miniblog-3cb54.firebaseapp.com",
  projectId: "miniblog-3cb54",
  storageBucket: "miniblog-3cb54.appspot.com",
  messagingSenderId: "579980603960",
  appId: "1:579980603960:web:87f83b9f1b3632b50baccd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }