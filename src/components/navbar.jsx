import React, { Component } from "react";

const Navbar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <span>You have {props.total} items in your cart.</span>
      </a>
    </nav>
  );
};

export default Navbar;
