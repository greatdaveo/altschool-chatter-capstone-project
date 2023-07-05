import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const TestingMode = () => {
  const [toggle, setToggle] = useState < boolean > false;

  return (
    <nav>
      <div>
        <div>
          <Link to="/">
            <h1>Chatter</h1>
          </Link>
        </div>

        <div className="tg" id={toggle ? "navigation-mobile" : ""}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about-us">About us</NavLink>
            </li>
            <li>
              <NavLink to="/contact-us">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
          </ul>
        </div>

        <div>
          
            <Link to="">
              <button className="login">Log Out</button>
            </Link>
        
          <>
            <Link to="/login">
              <button className="login">Log In</button>
            </Link>
          </>

          <Link to="/register">
            <button className="signup">Sign Up</button>
          </Link>
        </div>
        
      </div>
    </nav>
  );
};

export default TestingMode;
