import React from "react";
import { Parallax } from "react-parallax";
import x from "../Images/x.jpg";
import y from "../Images/y.jpg";
import three from "../Images/three.jpg";
import white from "../Images/white.jpg";
import "../App.css";

function Dash() {
  return (
    <div className="App">
      <Parallax strength={600} bgImage={x}>
        <div className="content">
          <div className="text-content">Normal Parallax</div>
        </div>
      </Parallax>
      <Parallax strength={300} blur={{ min: -5, max: 15 }} bgImage={y}>
        <div className="content">
          <div className="text-content">Blur Parallax</div>
        </div>
      </Parallax>
      <Parallax strength={-600} bgImage={three}>
        <div className="content">
          <div className="text-content">Reverse Parallax</div>
        </div>
      </Parallax>
    </div>
  );
}

export default Dash;
