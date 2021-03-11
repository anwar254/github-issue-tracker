import firebase from 'firebase';

let firebaseConfig = {
    apiKey: "AIzaSyDntmPTnBFeAN0waOAbZk7WKol0vOSmrbc",
    authDomain: "github-issue-tracker-659d0.firebaseapp.com",
    projectId: "github-issue-tracker-659d0",
    storageBucket: "github-issue-tracker-659d0.appspot.com",
    messagingSenderId: "434632891746",
    appId: "1:434632891746:web:129e0bed067255bc47e03b",
    measurementId: "G-ZT7GTSXBM3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;