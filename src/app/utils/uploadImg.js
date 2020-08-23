import firebase from "firebase";

const uploadImg = async (path, file) => {
  const smStorageRef = firebase.storage().ref(path);
  await smStorageRef.put(file);
  const url = await smStorageRef.getDownloadURL();
  return url;
};

export default uploadImg;
