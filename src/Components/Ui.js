import React from "react";
import "./Ui.css";
import Kos from "../images/insta.png";
const Ui = () => {
  return (
    <>
      <div className="main">
        <div className="row">
          <div className="col-3 red ">
            <div className="image">
              <img src={Kos} />
            </div>
            <div className="image-name">
                <h4>insta</h4>
            </div>

          </div>
          <div className="col-9 green ">
            <div className="input">
              <input type="text" name="" />
              <input type="text" />
            </div>
            <br />
            <div className="input">
              <input type="text" name="" />
              <input type="text" />
            </div>
            <br />
            <div className="input">
              <input type="text" name="" />
              <input type="text" />
            </div>
            <br />
            <div className="input">
              <input type="text" name="" />
              <input type="text" />
            </div>
            <br />
            <div className="input">
              <input type="text" name="" />
              <input type="text" />
            </div>
            <br />
            <div className="input">
              <input type="text" name="" />
              <input type="text" />
            </div>
            <br />
            <div className="input">
              <input type="text" name="" />
              <input type="text" />
            </div>
            <br/>
            <div className="button">
                <button>submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ui;
