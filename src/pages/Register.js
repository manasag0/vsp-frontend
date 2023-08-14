import React from "react";
import LeftSide from "../Components/Leftside";
import Right from "../Components/Right";
import NavBar from "../Components/NavBar";
import '../Styles/register.css';

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
