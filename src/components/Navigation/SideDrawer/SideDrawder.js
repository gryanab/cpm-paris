import React from "react";
import { Link } from "react-router-dom";
import cpmpLogo from "../../../assets/images/cpm-logo/cpm-logo.png";

import "./SideDrawer.css";

const sideDrawer = props => {
  let drawerClasses = ["side-drawer"];

  if (props.show) {
    drawerClasses = ["side-drawer", "open"];
  }
  return (
    <nav className={drawerClasses.join(" ")}>
      <img src={cpmpLogo} width="100px" className="cpm_logo_side_drawer" />
      <ul>
        <li className="top_li">
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="#our_agency">Agence</Link>
        </li>
        <li>
          <Link to="/">Nos prestations</Link>
        </li>
        <li>
          <Link to="/magazine"> Références</Link>
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
