import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.con";

const iniaitalAuthentiCation = () => {
  initializeApp(firebaseConfig);
};
export default iniaitalAuthentiCation;
