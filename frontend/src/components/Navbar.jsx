import React from "react";
import "./Navbar.css"

const Navbar = () => {
    return (

        <nav>
        <div className='left'>
          <li>
            <ul>Home</ul>
            <ul>Contact</ul>
            <ul>Course</ul>
            <input className='search' type="text" placeholder="search here"/>
          </li>
        </div>
        <div className='right'>
        <li>
          <ul>Go to</ul>
          <ul>For Student</ul>
          <ul>For Teacher</ul>
          <a className="login">Log in</a>
          <a className="signup">Sign Up</a>
        </li>
        </div>
       </nav>
    );
}

export default Navbar