import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAD7gu3TKtYiDQKyhCYm--Q11x4xg0h4gQ",
  authDomain: "cowkwa-fireblog.firebaseapp.com",
  projectId: "cowkwa-fireblog",
  storageBucket: "cowkwa-fireblog.appspot.com",
  messagingSenderId: "930424099557",
  appId: "1:930424099557:web:550c929aa18fd381e7ba0c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
