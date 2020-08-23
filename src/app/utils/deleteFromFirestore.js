import firebase from "firebase";

const deleteFromFirestore = (path) => {
  const db = firebase.firestore();
  const dbRef = db.collection("cms").doc("gallery");

  dbRef.update({
    [path]: firebase.firestore.FieldValue.delete(),
  });
};

export default deleteFromFirestore;
