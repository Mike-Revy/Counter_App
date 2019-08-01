import React, { Component } from "react";

// Stateless Functional Component - do not make a class but create a function

// const NavBar = props => {
const NavBar = ({ totalCounters }) => {
  // return a react element
  console.log("NavBar Rendered");

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>{" "}
        />
      </a>
    </nav>
  );
};

//class NavBar extends Component {
//  render() {
//    return (
//      <nav className="navbar navbar-light bg-light">
//        <a className="navbar-brand" href="#">
//          Navbar{" "}
//          <span className="badge badge-pill badge-secondary">
//            {this.props.totalCounters}
//          </span>{" "}
//          />
//        </a>
//      </nav>
//    );
//  }
//}
// use sfc, like cc to expand react language - short cut .. stateless function
// cc - class compnent

export default NavBar;
