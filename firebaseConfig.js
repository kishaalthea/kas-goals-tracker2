import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAOL8htJfqnhtIOTV87JqjzyOJClRhKPqU",
  authDomain: "kasgoaltracker.firebaseapp.com",
  projectId: "kasgoaltracker",
  storageBucket: "kasgoaltracker.firebasestorage.app",
  messagingSenderId: "300278944315",
  appId: "1:300278944315:web:18a950ec5b6ead6c44c21e",
  measurementId: "G-3ET31BD6D4"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);