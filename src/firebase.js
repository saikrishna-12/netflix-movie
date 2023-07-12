import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCYUCnNsl2cEY7-NaYAmIMB-1NOsCdTJqI",
  authDomain: "netflix-movie-c9f77.firebaseapp.com",
  projectId: "netflix-movie-c9f77",
  storageBucket: "netflix-movie-c9f77.appspot.com",
  messagingSenderId: "837405390844",
  appId: "1:837405390844:web:49ca6812b21f326f7ea479"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { auth };
export default db;