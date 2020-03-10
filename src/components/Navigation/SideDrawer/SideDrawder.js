import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

import cpmpLogo from '../../../assets/images/cpm-logo/cpm-logo.png';

import './SideDrawer.css';

const sideDrawer = props => {
  let drawerClasses = ['side-drawer'];

  if (props.show) {
    drawerClasses = ['side-drawer', 'open'];
  }
  return (
    <nav className={drawerClasses.join(' ')}>
      <img src={cpmpLogo} width="100px" className="cpm_logo_side_drawer" />
      <ul>
        <li className="top_li">
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <ScrollLink smooth={true} exact to="notreAgence">
            Agence
          </ScrollLink>
        </li>
        <li>
          <ScrollLink smooth={true} exact to="nosPrestations">
            Nos Prestations
          </ScrollLink>
        </li>
        <li>
          <Link to="/magazine"> Références</Link>
        </li>
        <li>
          <ScrollLink smooth={true} exact to="contactNav">
            Contact
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
