import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {navigate} from '@reach/router'
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAgeWYuJ2CEi0oXfcmwpcLP5EFeGCBWoqI",
  authDomain: "acre-b40f3.firebaseapp.com",
  databaseURL: "https://acre-b40f3.firebaseio.com",
  projectId: "acre-b40f3",
  storageBucket: "",
  messagingSenderId: "888388165366",
  appId: "1:888388165366:web:2d9d55274d160a566396d7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(provider).then(async function (result) {
  console.log("SIGN IN GOOGLE SUCCESS ", result)

  const user = result.user
  await createUserProfileDocument(user)
  await navigate(`/user/${user.uid}`)
})

export const createUserProfileDocument = async (user, additionalData) => {
  if(!user) return;

  const userRef = firestore.doc(`users/${user.uid}`)

  const snapshot = await userRef.get();

  if(!snapshot.exists) {
    const { displayName, photoURL, email } = user;

    const createdAt = new Date();

    try {
      await userRef.set ({
        displayName,
        photoURL,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.error("Error creating user ", error);
    }
  }
  return getUserDocument(user.uid)
}

export const getUserDocument= async (uid) => {
  if(!uid) return null;

  try {
    const userDocument = await firestore.collection('users').doc(uid).get()

    return {uid, ...userDocument.data()}
  } catch(error) {
    console.error('Error retrieving user ', error)
  }
}

export const signOut = () => auth.signOut().then(() => navigate('/'));

export default firebaseConfig;