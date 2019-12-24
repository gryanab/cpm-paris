import React, { Component } from 'react';

import Toolbar from '../../Navigation/Toolbar/Toolbar';
import SideDrawer from '../../Navigation/SideDrawer/SideDrawder';
import BackDrop from '../../Navigation/BackDrop/BackDrop';
import Footer from '../FooterPresta/FooterPresta';
import RefInterne from '../../../assets/images/prestations/ref-interne.png';
import RefInternePic from '../../../assets/images/prestations/ref_interne_pic.jpg';

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
            <h1 className={classes.presta_title}>RÉFÉRENCEMENT INTERNE</h1>
            <p className={classes.presta_text}>
              N'hésitez pas à venir découvrir nos nouveaux outils de
              référencement interne afin d'accroître votre visibilité et de
              développer de nouveaux clients ciblés. Nous recherchons sans cesse
              à améliorer votre visibilité et à répondre aux attentes de nos
              clients en termes de ertombées commerciales. Pour une campagne de
              communication ciblée et efficace, faites confiance à notre
              expérience.
            </p>
          </div>
          <img className={classes.img_presta} src={RefInterne} />
          <p className={classes.petit_paragraphe}>
            Nous somme à votre écoute et sommes disponibles pour répondre à
            toutes vos attentes. Contactez nous pour une étude personnalisée.
          </p>
          <div className={classes.one}>
            <img className={classes.pic} src={RefInternePic} />
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
