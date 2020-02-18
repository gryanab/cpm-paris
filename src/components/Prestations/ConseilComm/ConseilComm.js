import React, { Component } from 'react';

import Toolbar from '../../Navigation/Toolbar/Toolbar';
import SideDrawer from '../../Navigation/SideDrawer/SideDrawder';
import BackDrop from '../../Navigation/BackDrop/BackDrop';
import ConseilComm from '../../../assets/images/prestations/conseil-com.png';
import ConseilCommPi from '../../../assets/images/prestations/communication_pic.jpg';

import Layout from '../../../hoc/Layout/Layout';

import classes from '../Prestations.module.css';
import FooterPresta from '../FooterPresta/FooterPresta';

class Prestations extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backDropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };
  render() {
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
          <div className={classes.presta}>
            <h1 className={classes.presta_title}>CONSEIL EN COMMUNICATION</h1>
            <p className={classes.presta_text}>
              Notre priorité absolue est de fournir des services de la plus
              haute qualité. Nous pouvons ainsi aiguiller et conseiller au mieux
              nos clients afin de pleinement les satisfaire. <br /> <p />
              Notre métier premier est de conseiller tous les types de sociétés
              (artisans, indépendants, PMI-PME, industries...) dans la
              recherche, le développement et la fidélisation de leurs clients.
              Nous mettons en place une stratégie adaptée à vos besoins afin de
              développer votre notoriété.
            </p>
          </div>
          <img className={classes.img_presta} src={ConseilComm} />
          <p className={classes.petit_paragraphe}>
            Notre objectif, promouvoir votre identité et vos valeurs au travers
            d'une communication cohérente et ciblée.
          </p>
          <div className={classes.one}>
            <img className={classes.pic} src={ConseilCommPi} />
          </div>
          <div className={classes.tablet}>
            <img className={classes.ptablet} src={ConseilCommPi} />
          </div>
          <div className={classes.two}></div>
          <div className={classes.three}></div>
          <FooterPresta />
        </div>
      </Layout>
    );
  }
}

export default Prestations;
