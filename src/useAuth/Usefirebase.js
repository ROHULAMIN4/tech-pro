import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  FacebookAuthProvider,
} from "firebase/auth";
import { useEffect, useState } from "react";
import iniaitalAuthentiCation from "../fireabase/Firebase.init";
iniaitalAuthentiCation();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isloadin, setIsloadin] = useState(true);
  const auth = getAuth();
  const singInusingGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        setIsloadin(true);
        //   console.log(result.user);
      })
      .finally(() => setIsloadin(false));
  };
  const singIngUsingFacebook = () => {
    setIsloadin(true);
    const facebookProvider = new FacebookAuthProvider();
    signInWithPopup(auth, facebookProvider).then((result) => {
      setUser(result.user);
    });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsloadin(false);
    });
    return () => unsubscribe;
  }, []);
  const logOut = () => {
    setIsloadin(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setIsloadin(false));
  };
  return {
    user,
    singInusingGoogle,
    logOut,
    singIngUsingFacebook,
    isloadin,
  };
};
export default useFirebase;
