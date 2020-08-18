import React from "react";
import SignUp from "./SignUp";
import SignUpImg from "./SignUpImg";
// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <div className="container">
      <SignUpImg/>
      <SignUp/>
      </div>
    </>
  );
};

export default App;
