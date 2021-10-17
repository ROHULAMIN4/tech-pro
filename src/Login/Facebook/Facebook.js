import React from "react";
const Facebook = () => {
  return (
    <div className="App">
      <h4 className="text-primary mt-3">Login Your facebook</h4>
      <input
        className="mt-4 w-75 p-2"
        type="email"
        name=""
        id=""
        placeholder="Please Enter Your Email"
      />
      <p></p>
      <input
        className="w-75 p-2"
        type="password"
        name=""
        id=""
        placeholder="Please Enter Your password"
      />
      <p></p>
      <div className="btn btn-primary w-25">Log in</div>
    </div>
  );
};

export default Facebook;
