import React from "react";
import LeftSide from "../Components/leftside";
import Right from "../Components/Right";
import NavBar from "../Components/NavBar";

const Register = () => {
  const data = {
      title: 'Register',
      desc: 'Register to continue access pages',
  };

  return (
    <>
      <NavBar />
      <div className="register">
        <LeftSide text="Sign In"/>
        <Right {...data}/>
      </div>
    </>
  );
};

export default Register;
