import React from "react";
import { Link } from "react-router-dom";

import "./SideDrawer.css";

const sideDrawer = props => {
  let drawerClasses = ["side-drawer"];

  if (props.show) {
    drawerClasses = ["side-drawer", "open"];
  }
  console.log(drawerClasses.join(" "));
  return (
    <nav className={drawerClasses.join(" ")}>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="#our_agency">Agence</Link>
        </li>
        <li>
          <Link to="/">Nos prestations</Link>
        </li>
        <li>
          <Link to="/magazine">Références</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
        <li>
          <Link to="/">Mentions légales</Link>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
