import firebase from "firebase";

const updateDb = (doc, path, data) => {
  const db = firebase.firestore();

  db.collection("cms")
    .doc(doc)
    .update({
      [path]: data,
    });

  alert("Dodano");
};
export default updateDb;
