import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAXNs77IVt9lwuZdvlTAKbKTzEI5qLovTI",
  authDomain: "pomodoromobile.firebaseapp.com",
  projectId: "pomodoromobile",
  storageBucket: "pomodoromobile.appspot.com",
  messagingSenderId: "115137371860",
  appId: "1:115137371860:web:f5fc6474dcd07d352f2541"
};

const app = initializeApp(firebaseConfig);

export default app;
