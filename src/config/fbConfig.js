import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyD-08iDimabpnYgbTLA-wjQKSZGcx2f-4A",
    authDomain: "projectplanner-4b5e6.firebaseapp.com",
    databaseURL: "https://projectplanner-4b5e6.firebaseio.com",
    projectId: "projectplanner-4b5e6",
    storageBucket: "",
    messagingSenderId: "777157767853",
    appId: "1:777157767853:web:136c96ac43dcf7be"
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;