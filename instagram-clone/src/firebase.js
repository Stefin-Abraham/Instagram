import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDL-FQ86238jbbwap_DB2i25Y2BWvDRkcg",
    authDomain: "instagram-clone-react-ea486.firebaseapp.com",
    projectId: "instagram-clone-react-ea486",
    storageBucket: "instagram-clone-react-ea486.appspot.com",
    messagingSenderId: "161698091664",
    appId: "1:161698091664:web:348691957714767ad83e15",
    measurementId: "G-5EW0SXMBHT"
});



firebase.initializeApp(config);

export const firestore = firebase.firestore();

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

export default firebase;

// export const firestore = firebase.firestore();



// export default firebase;