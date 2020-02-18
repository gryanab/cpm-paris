import React, { Component } from 'react';

import Toolbar from '../../Navigation/Toolbar/Toolbar';
import SideDrawer from '../../Navigation/SideDrawer/SideDrawder';
import BackDrop from '../../Navigation/BackDrop/BackDrop';
import Footer from '../../Home/Footer/Footer';
import Formation from '../../../assets/images/prestations/formation.png';
import FormationPic from '../../../assets/images/prestations/formation_pic.jpg';

import Layout from '../../../hoc/Layout/Layout';

import classes from '../Prestations.module.css';
import FooterPresta from '../FooterPresta/FooterPresta';

class FormationComp extends Component {
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
            <h1 className={classes.presta_title}>FORMATION</h1>
            <p className={classes.presta_text}>
              Nous sommes fiers de l’efficacité de nos méthodes de formation,
              mais nous nous efforçons de nous améliorer pour fournir toujours
              de meilleurs résultats. Fort de notre expérience de plus de 25 ans
              dans le domaine des métiers de la communication et des médias,
              nous mettons à votre disposition nos compétences afin de vous
            </p>
          </div>
          <img className={classes.img_presta} src={Formation} />
          <div className={classes.one}>
            <img className={classes.pic} src={FormationPic} />
          </div>
          <div className={classes.tablet}>
            <img className={classes.ptablet} src={FormationPic} />
          </div>
          <div className={classes.two}></div>
          <div className={classes.three}></div>
          <FooterPresta />
        </div>
      </Layout>
    );
  }
}

export default FormationComp;
