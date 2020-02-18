import React, { Component } from 'react';

import Toolbar from '../../Navigation/Toolbar/Toolbar';
import SideDrawer from '../../Navigation/SideDrawer/SideDrawder';
import BackDrop from '../../Navigation/BackDrop/BackDrop';
import Footer from '../FooterPresta/FooterPresta';
import WebAgency from '../../../assets/images/prestations/web-agency.png';
import WebAgencyPic from '../../../assets/images/prestations/web_agency_pic.jpg';

import Layout from '../../../hoc/Layout/Layout';

import classes from '../Prestations.module.css';

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
            <h1 className={classes.presta_title}>WEB AGENCY</h1>
            <p className={classes.presta_text}>
              Nous vous assistons de la conception à la gestion en passant par
              la réalisation de vos outils de communication internet et
              intranet. Notre agence web est capable de répondre à tous vos
              besoins en terme d’élaboration d’une véritable stratégie digitale.{' '}
              <br /> <p />
              Nous vous accompagnons également pour la création et la gestion de
              site web design, le référencement google, et les conseils
              marketing. Nous créons sur le long terme votre propre site
              actualisé et visible sur les moteurs de recherche. <br /> <p />
              Nous vous conseillons pour définir une stratégie digitale qui soit
              en adéquation avec vos objectifs et votre image afin de dynamiser
              votre croissance sur le web.
            </p>
          </div>
          <img className={classes.img_presta} src={WebAgency} />
          <div className={classes.one}>
            <img className={classes.pic} src={WebAgencyPic} />
          </div>
          <div className={classes.tablet}>
            <img className={classes.ptablet} src={WebAgencyPic} />
          </div>
          <div className={classes.two}></div>
          <div className={classes.three}></div>
          <Footer />
        </div>
      </Layout>
    );
  }
}

export default Prestations;
