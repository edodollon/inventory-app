// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0m_V8kqmBkXKTssZrSbmlkWLh_Dnc-Zk",
  authDomain: "basemint-inventory.firebaseapp.com",
  projectId: "basemint-inventory",
  storageBucket: "basemint-inventory.appspot.com",
  messagingSenderId: "940372866557",
  appId: "1:940372866557:web:7cd2b1fe38c7091f3a1594",
  measurementId: "G-B9HX65PGEW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function App() {
  return (
    <div>
      <h1>inventory app for stores</h1>
    </div>
  );
}
