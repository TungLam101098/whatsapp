import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDreRlQx9iM4CM_DXV3kvS5Gp8Ia_rCYX0",
  authDomain: "whatsapp-73653.firebaseapp.com",
  projectId: "whatsapp-73653",
  storageBucket: "whatsapp-73653.appspot.com",
  messagingSenderId: "624216592048",
  appId: "1:624216592048:web:f1c688153800defcd77575"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); 
}

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };