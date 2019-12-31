import React, { Component } from "react";

import Toolbar from "../../Navigation/Toolbar/Toolbar";
import SideDrawer from "../../Navigation/SideDrawer/SideDrawder";
import BackDrop from "../../Navigation/BackDrop/BackDrop";
import Footer from "../FooterPresta/FooterPresta";
import WebAgency from "../../../assets/images/prestations/web-agency.png";
import WebAgencyPic from "../../../assets/images/prestations/web_agency_pic.jpg";

import Layout from "../../../hoc/Layout/Layout";

import classes from "../Prestations.module.css";

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
              Créateur de site internet, référencement google, Community
              Management, design... Nous créons sur le long terme votre
              visibilité sur les moterus de recherche. Nous vous accompagnons
              pour définir une stratégie digitale qui soit en adéquation avec
              vos objectifs afin de dynamiser votre croissance sur le web.
            </p>
          </div>
          <img className={classes.img_presta} src={WebAgency} />
          <p className={classes.petit_paragraphe}>
            Action/Réaction
            <br />
            Vous serez conseillé par nos experts web et serez épaulé par nos
            graphistes pour une meilleure expression de votre message.
          </p>
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
