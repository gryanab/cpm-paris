import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./DrawerToggleButton.css";

const drawerToggleButton = props => (
  <button className="toggle-button" onClick={props.click}>
    <FontAwesomeIcon icon={faBars} style={{ fontSize: "30px" }} />
  </button>
);

export default drawerToggleButton;
