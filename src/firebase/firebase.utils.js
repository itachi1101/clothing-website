import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyAO4vWFeIaxOJLW9nmZ4wOTVes7gEr-W7w",
    authDomain: "crwn-db-b9a9e.firebaseapp.com",
    projectId: "crwn-db-b9a9e",
    storageBucket: "crwn-db-b9a9e.appspot.com",
    messagingSenderId: "858581030459",
    appId: "1:858581030459:web:e2039d37d703e693dc6e1e",
    measurementId: "G-QDKLHMFNSH"
  };

  firebase.initializeApp(config);
  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);
  export default firebase;