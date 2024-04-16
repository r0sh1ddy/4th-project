// Import the Firebase modules
import firebase from 'firebase/app';
import 'firebase/database';

// Initialize Firebase
const firebaseConfig = {
  // Your Firebase configuration object
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Inside the handleSubmit function
const handleSubmit = (event) => {
  event.preventDefault();
  if (searchTerm.trim()) {
    const newQuestion = { question: searchTerm, link: '' };
    // Send the newQuestion to the Firebase Realtime Database
    const questionsRef = database.ref('questions');
    questionsRef.push(newQuestion);
    setSearchTerm('');
  }
};