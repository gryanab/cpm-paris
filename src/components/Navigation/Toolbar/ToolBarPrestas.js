import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Toolbar.module.css';

import '../SideDrawer/DrawerToggleButton';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import cpmLogoLong from '../../../assets/images/cpm-logo/LogoCPM_Long (1).png';
import cpmLogo from '../../../assets/images/cpm-logo/cpm-logo.png';
const toolbarPrestas = (props) => (
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
      <div className={classes.toolbar__logo__tablette}>
        <a href="/">
          <img src={cpmLogoLong} alt="CPM-PARIS" width="150%" />
        </a>
      </div>
      <div className={classes.spacer}></div>
      <div className={classes.toolbar_navigation_items}>
        <ul>
          <li>
            <NavLink
              exact
              activeStyle={{
                fontWeight: 'bold',
                color: 'red',
                textDecoration: 'none',
              }}
              to="/"
            >
              retour
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbarPrestas;
