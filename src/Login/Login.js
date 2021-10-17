import React from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

import useFirebase from "../useAuth/Usefirebase";
import Facebook from "./Facebook/Facebook";
import "./Login.css";

const Login = () => {
  const { facebookLogin } = Facebook();

  const { user, singInusingGoogle, logOut, singIngUsingFacebook, isloadin } =
    useFirebase();
  if (isloadin) {
    return <Spinner className="mt-5" animation="border" variant="danger" />;
  }

  return (
    <>
      <div>
        {user?.email ? (
          <div>
            <button onClick={logOut} className="btn btn-warning mt-4">
              LogOut
            </button>
            <p>
              {" "}
              Welcome:{" "}
              <span className="text-primary fw-bold">{user.displayName}</span>
            </p>
            <img src={user.photoURL} alt="" />
          </div>
        ) : (
          <button onClick={singInusingGoogle} className="btn btn-warning mt-4">
            Google Log In
          </button>
        )}
      </div>

      <Link className="buttonBustrap" to="/facebook">
        Faceebook
      </Link>
    </>
  );
};

export default Login;
