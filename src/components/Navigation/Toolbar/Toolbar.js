import React from 'react';
import { Link } from 'react-router-dom';
import './Toolbar.css';

import '../SideDrawer/DrawerToggleButton';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import cpmLogo from '../../../assets/images/cpm-logo/cpm-logo.png';
const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo">
        <a href="/">
          <img src={cpmLogo} alt="CPM-PARIS" width="30%" />
        </a>
      </div>
      <div className="spacer"></div>
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <Link to="/">accueil</Link>
          </li>
          <li>
            <Link to="/">agence</Link>
          </li>
          <li>
            <Link to="/prestations">nos prestations</Link>
          </li>
          <li>
            <Link to="/magazine">références</Link>
          </li>
          <li>
            <Link to="/">contact</Link>
          </li>
          <li>
            <Link to="/">mentions légales</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
