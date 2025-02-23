import { useState } from "react";
import Navbar from "./components/Navbar";
// Bootstrap CSS and JS
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./App.css";
// changes
function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <div className="mid">
          <div className="learn">Learn the latest skills to reach your professional goals!!</div>
          <img className="photo1" src="photo1.png" alt="Learning" />
        </div>
        <div className="free">Start Your Free Trial</div>
        <div className="boxes">
          <div className="box1">
            <div>
              <div>Learn with</div>
              <div>232 new Courses</div>
            </div>
          </div>
          <div className="box1">
            <div>
              <div>Learn with</div>
              <div>232 new Courses</div>
            </div>
          </div>
          <div className="box1">
            <div>
              <div>Learn with</div>
              <div>232 new Courses</div>
            </div>
          </div>
          <div className="box1">
            <div>
              <div>Learn with</div>
              <div>232 new Courses</div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="bg-white">MOST POPULAR COURSES</h1>
        </div>
        <div className="cards">
          <img className="photo2" src="photo2.png"/>
          <div className="read_add">
            <li>
              <ul>read</ul>
              <ul>add</ul>
            </li>
          </div>
          <div className="text">hello</div>
          <div className="base">mike</div>
        </div>
      </div>
    </>
  );
}

export default App;
