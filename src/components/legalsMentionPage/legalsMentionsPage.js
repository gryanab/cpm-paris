import React, { Component } from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawder';
import BackDrop from '../Navigation/BackDrop/BackDrop';
import Footer from '../Prestations/FooterPresta/FooterPresta';

import Retract1 from '../../assets/images/mentionsLégales/retract(1)-1.jpg';
import Retract2 from '../../assets/images/mentionsLégales/retract(1)-2.jpg';

import {
  faAngleLeft,
  faAngleRight,
  faPhoneAlt,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';

import Layout from '../../hoc/Layout/Layout';

import classes from './legalsMentionsPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Prestations extends Component {
  state = {
    sideDrawerOpen: false,
    open: true
  };

  toggleImage = () => {
    this.setState(state => ({ open: !state.open }));
  };

  getImageName = () => (this.state.open ? 'retract1' : 'retract2');

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backDropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };
  render() {
    const imagesPath = {
      retract1: Retract1,
      retract2: Retract2
    };
    const imageName = this.getImageName();
    let backDrop;
    console.log(this.state.sideDrawerOpen);
    if (this.state.sideDrawerOpen) {
      backDrop = <BackDrop click={this.backDropClickHandler} />;
    }

    return (
      <Layout>
        <div className={classes.white}></div>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} height="" />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backDrop}
        <div className={classes.container}>
          <div className={classes.siège_soc}>
            <h1 className={classes.siège_social}>SIÈGE SOCIAL</h1>
            <p className={classes.siège_social_text}>
              Conseil Presse Marketing
            </p>
            <p className={classes.siège_social_text}>
              Centre d'affaires Porte de Paris
            </p>
            <p className={classes.siège_social_text}>
              440 Clos de la Courtine 93160 Noisy Le Grand
            </p>
          </div>
          <div className={classes.contact}>
            <h1 className={classes.contact_title}>CONTACT</h1>
            <div>
              <p className={classes.contact_text_l}>
                {' '}
                <FontAwesomeIcon icon={faPhoneAlt} />{' '}
                <span style={{ color: 'white' }}>aa</span>01 82 37 09 70
              </p>
              <p className={classes.contact_text_r}>
                <FontAwesomeIcon icon={faEnvelope} />
                <span style={{ color: 'white' }}>aa</span>
                contact@cpmparis.fr
              </p>
            </div>
          </div>
          <div className={classes.rep_légale}>
            <h1 className={classes.légale_title}>REPRÉSENTANT LÉGAL</h1>
            <p className={classes.légal_text}>
              Inscription au registre du commerce: 82991852300020{' '}
            </p>
          </div>
          <FontAwesomeIcon
            onClick={this.toggleImage}
            className={classes.left_arrow}
            size="5x"
            fixedWidth="false"
            icon={faAngleLeft}
          />
          <div className={classes.mentions_légales}>
            <div className={classes.display_inline}>
              <img
                style={{ width: '100%', height: '500px' }}
                src={imagesPath[imageName]}
              />
            </div>
            <FontAwesomeIcon
              onClick={this.toggleImage}
              size="5x"
              fixedWidth="false"
              className={classes.right_arrow}
              icon={faAngleRight}
            />
          </div>
          <Footer />
        </div>
      </Layout>
    );
  }
}

export default Prestations;
