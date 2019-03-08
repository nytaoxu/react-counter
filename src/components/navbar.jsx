import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <span>You have {this.props.total} items in your cart.</span>
        </a>
      </nav>
    );
  }
}

export default Navbar;
