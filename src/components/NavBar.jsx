import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="navBar d-flex justify-content-around align-items-center">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
      </div>
    </>
  );
};

export default NavBar;
