import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyB8jHyWUnqwQFZUoLWxLfi4OwDSU2ylqmk",
    authDomain: "facebook-clone-8834c.firebaseapp.com",
    databaseURL: "https://facebook-clone-8834c.firebaseio.com",
    projectId: "facebook-clone-8834c",
    storageBucket: "facebook-clone-8834c.appspot.com",
    messagingSenderId: "108898598427",
    appId: "1:108898598427:web:0fd6001c813dd2ed2302be"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;