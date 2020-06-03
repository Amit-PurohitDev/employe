import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyCdd-JrBKn7-NNCRBS1sJJjfOfzlqzLIPQ",
    authDomain: "emplyedetail.firebaseapp.com",
    databaseURL: "https://emplyedetail.firebaseio.com",
    projectId: "emplyedetail",
    storageBucket: "emplyedetail.appspot.com",
    messagingSenderId: "96209463410",
    appId: "1:96209463410:web:0cdf0764d1930cf9133aeb"
  };


  const Firebase = firebase.initializeApp(firebaseConfig);
  export default Firebase;