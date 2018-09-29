import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBC_oautl-oHWFlqb8b_nkMFWgb4epYWiA",
    authDomain: "todo-feda5.firebaseapp.com",
    databaseURL: "https://todo-feda5.firebaseio.com",
    projectId: "todo-feda5",
    storageBucket: "todo-feda5.appspot.com",
    messagingSenderId: "776431441828"
  };

  firebase.initializeApp(config);

  export default firebase;