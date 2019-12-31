import React, { Component } from "react";

import Toolbar from "../../Navigation/Toolbar/Toolbar";
import SideDrawer from "../../Navigation/SideDrawer/SideDrawder";
import BackDrop from "../../Navigation/BackDrop/BackDrop";
import Footer from "../../Home/Footer/Footer";
import DesignGraphique from "../../../assets/images/prestations/design-graphique.png";
import DesignGraphiquePic from "../../../assets/images/prestations/design_graphique_pic.jpg";

import Layout from "../../../hoc/Layout/Layout";

import classes from "../Prestations.module.css";
import FooterPresta from "../FooterPresta/FooterPresta";

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
            <h1 className={classes.presta_title}>DESIGN GRAPHIQUE</h1>
            <p className={classes.presta_text}>
              Notre équipe de graphistes, recrutés dans les meilleurs écoles,
              met tout son savoir faire en avant pour véhiculer un message clair
              et direct. <br />
              Vous concevoir une communication visuelle ciblée et efficace c'est
              notre métier !
            </p>
          </div>
          <img className={classes.img_presta} src={DesignGraphique} />
          <p className={classes.petit_paragraphe}></p>
          <div className={classes.one}>
            <img src={DesignGraphiquePic} className={classes.pic} />
          </div>
          <div className={classes.tablet}>
            <img src={DesignGraphiquePic} className={classes.ptablet} />
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
