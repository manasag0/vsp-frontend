import React from "react";
import data from "../formFields";
import { useNavigate } from "react-router-dom";

const InitialState = {
  name: "",
  email: "",
  phone: "",
  profession: "",
  password: "",
  confirmpassword: "",
};

const Input = ({ onChange, type, name, value, placeholder }) => {
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
  const [formdata, setformdata] = useState(InitialState);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };

  const onsubmitHandle = async (e) => {
    e.preventDefault();
    try {
      const endpoint = `http://localhost:4000/api/auth/${
        title === "Sign in" ? "login" : "register"
      }`;
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();

        if (title === "Sign in") {
          localStorage.setItem("username", data.username);
          alert("Login successfully completed");
          navigate("/");
        } else {
          alert("User registration successfully completed");
          navigate("/login");
        }
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="right">
      <h2 className="right_title">{title}</h2>
      <p className="right_desc">{desc}</p>
      <form method="post" className="form" onSubmit={onsubmitHandle}>
        {title === "Sign in"
          ? data
              .filter((obj) => obj.name === "email" || obj.name === "password")
              .map((data_2) => (
                <input
                  key={data_2.name}
                  onChange={handleOnChange}
                  {...data_2}
                />
              ))
          : data.map((data_2) => (
              <input key={data_2.name} {...data_2} onChange={handleOnChange} />
            ))}
        <div className="btn">
          <button type=" submit">{title}</button>
        </div>
      </form>
    </div>
  );
};

export default Right;
