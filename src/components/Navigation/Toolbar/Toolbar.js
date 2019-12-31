import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Toolbar.module.css";

import "../SideDrawer/DrawerToggleButton";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import cpmLogo from "../../../assets/images/cpm-logo/cpm-logo.png";
const toolbar = props => (
  <header className={classes.toolbar}>
    <nav className={classes.toolbar__navigation}>
      <div className={classes.toolbar__toggle_button}>
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className={classes.toolbar__logo}>
        <a href="/">
          <img src={cpmLogo} alt="CPM-PARIS" width="30%" />
        </a>
      </div>
      <div className={classes.spacer}></div>
      <div className={classes.toolbar_navigation_items}>
        <ul>
          <li>
            <NavLink
              exact
              // activeStyle={{
              //   fontWeight: 'bold',
              //   color: 'red',
              //   textDecoration: 'none'
              // }}
              to="/"
            >
              accueil
            </NavLink>
          </li>

          <li>
            <NavLink
              exact
              // activeStyle={{
              //   fontWeight: 'bold',
              //   color: 'red',
              //   textDecoration: 'none'
              // }}
              to="#our-agency"
            >
              agence
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              // activeStyle={{
              //   fontWeight: 'bold',
              //   color: 'red',
              //   textDecoration: 'none'
              // }}
              to="/"
            >
              nos prestations
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              // activeStyle={{
              //   fontWeight: 'bold',
              //   color: 'red',
              //   textDecoration: 'none'
              // }}
              to="/magazine"
            >
              références
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              // activeStyle={{
              //   fontWeight: 'bold',
              //   color: 'red',
              //   textDecoration: 'none'
              // }}
              to="/"
            >
              contact
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              // activeStyle={{
              //   fontWeight: 'bold',
              //   color: 'red',
              //   textDecoration: 'none'
              // }}
              to="/"
            >
              mentions légales
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
