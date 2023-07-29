import React from "react";
// import Practice from "./Components/Practice";
// import Header from "./Components/Header";
// import Addcontact from "./Components/Addcontact";
// import Contactlist from "./Components/Contactlist";
// import Contactcard from "./Components/Contactcard";
import { Routes, Route } from "react-router-dom";
import Form from "./Components/Form";
import Signin from "./Components/Signin";
import Ui from "./Components/Ui";

const App = () => {
  return (
    <div>
      {" "}
      {/* <Practice />{" "} */}
      {/* <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/signin" element={<Signin />} />
      </Routes> */}
      {/* <Form />
      <Signin /> */}
      <Ui/>
    </div>
  );
};

export default App;
