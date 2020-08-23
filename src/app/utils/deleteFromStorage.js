import firebase from "firebase";

const deleteFromStorage = (path, file) => {
  const db = firebase.firestore();
  const storageRef = firebase.storage().ref(path);
  storageRef.child(file).delete();
};

export default deleteFromStorage;
