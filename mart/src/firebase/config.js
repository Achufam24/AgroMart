//import firebase from 'firebase';
import  firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; //v9

// import firebase from 'firebase/app';
// import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCVJeQVDmlPmXjy6fMWD6CAJ78JJYVOm2Q",
    authDomain: "agromart-8c477.firebaseapp.com",
    projectId: "agromart-8c477",
    storageBucket: "agromart-8c477.appspot.com",
    messagingSenderId: "610294125122",
    appId: "1:610294125122:web:b8220e2e8a9c180bdc13db"
  };

// init firebase
//initializeApp(config)
//const db = firebase.initializeApp(config);
firebase.initializeApp(config)
//const auth = firebase.auth()
const auth = firebase.auth()

 export {auth}




