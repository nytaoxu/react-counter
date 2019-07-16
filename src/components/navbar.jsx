import React from "react";

const Navbar = ({ total }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <span>You have {total} items in your cart.</span>
      </a>
    </nav>
  );
};

export default Navbar;
