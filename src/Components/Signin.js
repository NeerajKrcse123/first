import React , {useState} from "react";

const Signin = () => {
    const [data, setdata] = useState({  email: "", password: "" });
    const [final, setfinal] = useState([]);
    const handleclick = (e) => {
      const { name, value } = e.target;
      setdata({ ...data, [name]: value });
    };
    const handleform = (e) => {
      e.preventDefault();
    //   console.log(data);
    //   localStorage.setItem("formvalue", JSON.stringify([...final, data]));
    const getuser=localStorage.getItem("formvalue");
    console.log(getuser);
    };
  return(
<>
<div>
<form onSubmit={handleform}>
          {/* <input
            type="text"
            name="username"
            value={data.username}
            onChange={handleclick}
          /> */}
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
</div>
</>
  );
};

export default Signin;
