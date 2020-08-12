import React from "react";
const Nav = (props) => {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
      </nav>
      <div style={{ marginLeft: 20 }}>item count {props.amount}</div>
    </>
  );
};

export default Nav;
