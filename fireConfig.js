// var firebaseConfig = {
//     apiKey: "AIzaSyDWz7-CZZUot40PjN-1aSgAoHI6bqZ-2Dg",
//     authDomain: "mmmutmess.firebaseapp.com",
//     projectId: "mmmutmess",
//     storageBucket: "mmmutmess.appspot.com",
//     messagingSenderId: "245689652045",
//     appId: "1:245689652045:web:b5cb7f493d4c8146001d04",
//     measurementId: "G-T3VLQEECTG"
//   };

const firebaseConfig = {
  apiKey:REACT_APP_FIREBASE_API_KEY,
  authDomain:REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId:REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket:REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId:REACT_APP_FIREBASE_APP_ID,
  measurementId:REACT_APP_FIREBASE_MEASUREMENT_ID
};

  firebase.initializeApp(firebaseConfig);
