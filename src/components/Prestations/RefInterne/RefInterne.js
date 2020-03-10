import React, { Component } from 'react';

import Toolbar from '../../Navigation/Toolbar/Toolbar';
import SideDrawer from '../../Navigation/SideDrawer/SideDrawder';
import BackDrop from '../../Navigation/BackDrop/BackDrop';
import Footer from '../FooterPresta/FooterPresta';
import RefInterne from '../../../assets/images/prestations/ref-interne.png';
import RefInternePic from '../../../assets/images/prestations/ref_interne_pic.jpg';

import Layout from '../../../hoc/Layout/Layout';

import classes from '../Prestations.module.css';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

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
              Notre équipe réalise des campagnes de référencement numériques
              professionnelles. L’édition de nos revues professionnelles est
              disponible sous formats numérique et papier. Nos revues sont
              spécialisées dans les domaines techniques comportants plusieurs
              catégories en fonction des secteurs d’activités. <br /> <p />
              Découvrez nos nouveaux outils de référencement interne qui
              permettent aux entreprises (multinationales, pmi, pme) de
              bénéficier d’informations indispensables et d’actualité sur leur
              cœur de métier. Ces outils vous permettrons d’accroître votre
              visibilité et ainsi développer de nouveaux clients ciblés. <br />{' '}
              <p />
              N’hésitez pas à nous contacter pour des études personnalisées !
            </p>
          </div>
          <img className={classes.img_presta} src={RefInterne} />
          <div className={classes.one}>
            <img className={classes.pic} src={RefInternePic} />
            <Button className={classes.magazine_button} variant="outline-dark">
              <NavLink
                className={classes.magazine_button_link}
                exact
                to="/magazine"
              >
                {' '}
                DÉCOUVRIR NOS MAGAZINES{' '}
              </NavLink>
            </Button>
          </div>
          <div className={classes.tablet}>
            <img className={classes.ptablet} src={RefInternePic} />
            <Button className={classes.magazine_button} variant="outline-dark">
              <NavLink
                className={classes.magazine_button_link}
                exact
                to="/magazine"
              >
                {' '}
                DÉCOUVRIR NOS MAGAZINES{' '}
              </NavLink>
            </Button>
          </div>
          <div className={classes.two}></div>
          <div className={classes.two}></div>
          <div className={classes.three}></div>
          <Footer />
        </div>
      </Layout>
    );
  }
}

export default Prestations;
