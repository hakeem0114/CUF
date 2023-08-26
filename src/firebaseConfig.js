import firebase from 'firebase/app';
import 'firebase/database'; // Import the Realtime Database module
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDj-QobEqvtY0A0-wRzVuafTLC9B4xcxkQ",
  authDomain: "canadian-university-filter.firebaseapp.com",
  databaseURL: "https://canadian-university-filter-default-rtdb.firebaseio.com",
  projectId: "canadian-university-filter",
  storageBucket: "canadian-university-filter.appspot.com",
  messagingSenderId: "556366278548",
  appId: "1:556366278548:web:690159ba50e625a6c06981"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export the initialized Firebase instance
export default firebase;