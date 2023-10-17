import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAVC0ZG-B5twj9GIXvd1dQUrJdGsICrd8Q",
  authDomain: "espresso-emporium-coffee.firebaseapp.com",
  projectId: "espresso-emporium-coffee",
  storageBucket: "espresso-emporium-coffee.appspot.com",
  messagingSenderId: "7772872938",
  appId: "1:7772872938:web:436132e52eeed2b4c8f793"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;