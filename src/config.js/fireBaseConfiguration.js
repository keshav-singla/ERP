// importing firebase from firebase
import * as firebase from 'firebase';

 // Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAa5nSOQ70FDLxTEJKt76TbIKFyiwDgjgA",
    authDomain: "erp-system-6e537.firebaseapp.com",
    databaseURL: "https://erp-system-6e537.firebaseio.com",
    projectId: "erp-system-6e537",
    storageBucket: "erp-system-6e537.appspot.com",
    messagingSenderId: "375042152099",
    appId: "1:375042152099:web:54dc514622725b8ad91116",
    measurementId: "G-K55TMT0131"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default fire;