import React, { useState } from "react";
import { Link } from "react-router-dom";
import Signin from "./Signin";

const Form = () => {
  const [data, setdata] = useState({ username: "", email: "", password: "" });
  const [final, setfinal] = useState([]);
  const handleclick = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };
  const handleform = (e) => {
    e.preventDefault();
    console.log(data);
    localStorage.setItem("formvalue", JSON.stringify([...final, data]));
  };
  return (
    <>
      <div>
        <div><h1>signup</h1></div>
        <form onSubmit={handleform}>
          <input
            type="text"
            name="username"
            value={data.username}
            onChange={handleclick}
          />
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleclick}
          />
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleclick}
          />
          <button type="submit">submit</button>
        </form>
        <p>already have an account <span> <Link to="./signin">signin</Link></span></p>
      </div>
    </>
  );
};

export default Form;
