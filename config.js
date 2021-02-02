import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBCIJqFLLahWcl0CV57NEyxxivNU15wBmQ",
    authDomain: "story-hub-d9905.firebaseapp.com",
    projectId: "story-hub-d9905",
    storageBucket: "story-hub-d9905.appspot.com",
    messagingSenderId: "940330440336",
    appId: "1:940330440336:web:d22bff356d66030f06ea15"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();