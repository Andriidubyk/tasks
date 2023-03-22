import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDK1eby_pVMjSKWPvYs0OO3oJsID2iKGsU",
  authDomain: "rickandmorty-e2ca3.firebaseapp.com",
  projectId: "rickandmorty-e2ca3",
  storageBucket: "rickandmorty-e2ca3.appspot.com",
  messagingSenderId: "781775776529",
  appId: "1:781775776529:web:d0609248f9358054f67ab0",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export { auth, provider };
