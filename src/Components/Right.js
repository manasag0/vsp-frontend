import React, { useState } from "react";
import data from "../formFields";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const initialState = {
  name: "",
  email: "",
  phone: "",
  profession: "",
  password: "",
  confirmpassword: "",
};
const Input = ({ onChange, type, name, placeholder, value }) => {
  return (
    <input
      onChange={onChange}
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
};
const Right = ({ title, desc }) => {
  const navigate = useNavigate();
  const [formdata, setformdata] = useState(initialState);
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setformdata({ ...formdata, [name]: value });
  };
  const onSubmitHandle = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:4000/api/auth/${
          title === "Sign in" ? "login" : "register"
        }`,
        formdata
      );
      if (title === "Sign in") {
         localStorage.setItem('username', response.data.username);
        alert("Login successfully completed");
        navigate("/");
      } else {
        alert("User registration successfully completed");
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="right">
      <h2 className="right_title">{title}</h2>
      <p className="right_desc">{desc}</p>
      <form method="Post" className="form" onSubmit={onSubmitHandle}>
        {title === "Sign in"
          ? data
              .filter((obj) => obj.name === "email" || obj.name === "password")
              .map((d) => (
                <Input key={d.name} onChange={handleOnChange} {...d} />
              ))
          : data.map((d) => (
              <Input key={d.name} {...d} onChange={handleOnChange} />
            ))}
        <div className="btn">
          <button type=" submit">{title}</button>
        </div>
      </form>
    </div>
  );
};

export default Right;
