import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCvgSzGled4IUFpLh4o7yVBp5yem7CdNoY",
    authDomain: "fir-crud-app-794a4.firebaseapp.com",
    projectId: "fir-crud-app-794a4",
    storageBucket: "fir-crud-app-794a4.appspot.com",
    messagingSenderId: "970526323800",
    appId: "1:970526323800:web:69451b36a1a7dcf155062d",
    measurementId: "G-HSKJYJ3Q8C"
  };


  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);