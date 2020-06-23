import React, { Component } from 'react';

import ToolbarPresta from '../../Navigation/Toolbar/ToolBarPrestas';
import SideDrawer from '../../Navigation/SideDrawer/SideDrawder';
import BackDrop from '../../Navigation/BackDrop/BackDrop';
import DesignGraphique from '../../../assets/images/prestations/design-graphique.png';
import DesignGraphiquePic from '../../../assets/images/prestations/design_graphique_pic.jpg';

import Layout from '../../../hoc/Layout/Layout';

import classes from '../Prestations.module.css';
import FooterPresta from '../FooterPresta/FooterPresta';

class Prestations extends Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
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
        <ToolbarPresta
          drawerClickHandler={this.drawerToggleClickHandler}
          height=""
        />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backDrop}
        <div className={classes.container}>
          <div className={classes.presta}>
            <h1 className={classes.presta_title}>DESIGN GRAPHIQUE</h1>
            <p className={classes.presta_text}>
              Le graphisme est omniprésent dans notre quotidien à travers le
              marketing, la publicité, l’édition, la presse et la communication
              d’entreprise. <br /> <p />
              Création et élaboration de supports publicitaires personnalisés.
              Nous créons des logo-types, cartes de visite, flyers, brochures et
              plaquettes. Notre équipe de graphistes qualifiés met tout son
              savoir-faire ainsi que sa créativité en avant, pour véhiculer un
              message clair et direct. Cela permet de concevoir une
              communication visuelle en adéquation avec votre entreprise et
              votre image de marque. <br /> <p />
              De plus, nos graphistes sont présents pour vous aiguiller dans vos
              choix de communication si vous n’avez aucune idée concernant vos
              types de médias à produire.
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
