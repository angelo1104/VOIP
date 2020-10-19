import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDUxjGbRH8RHCcCPRyCk0fTgSnf7jZ1xnU",
    authDomain: "voip-noapi.firebaseapp.com",
    databaseURL: "https://voip-noapi.firebaseio.com",
    projectId: "voip-noapi",
    storageBucket: "voip-noapi.appspot.com",
    messagingSenderId: "176727891254",
    appId: "1:176727891254:web:bf9ac19e73a89a43c92797",
    measurementId: "G-X7FPYPL2SH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();
const database = firebaseApp.firestore();

export { auth, database }