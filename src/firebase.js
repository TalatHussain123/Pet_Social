import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCHcXx3NXHbrMECTN8QmA2PF6A0JGVVz6I",
    authDomain: "pets-social-10346.firebaseapp.com",
    projectId: "pets-social-10346",
    storageBucket: "pets-social-10346.appspot.com",
    messagingSenderId: "365841672377",
    appId: "1:365841672377:web:d6042bf1f8d77eb7bc9368"
  };
  firebase.initializeApp(firebaseConfig);
  //const db = firebaseapp.firestore();
  export default firebase;
  