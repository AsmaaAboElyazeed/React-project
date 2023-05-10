import React from "react";
import  {Link}  from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav>
        <Link to="/">
          <img src="imgs/header-logo-group.svg" alt="logo" />
        </Link>
        <Link to="/login">
          <img src="imgs/Vector.svg" alt="Vector" />
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
