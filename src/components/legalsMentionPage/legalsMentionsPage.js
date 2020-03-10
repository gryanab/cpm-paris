import React, { Component } from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawder';
import BackDrop from '../Navigation/BackDrop/BackDrop';

import data from './mentions_legals.json';

import Layout from '../../hoc/Layout/Layout';

import classes from './legalsMentionsPage.module.css';

class Prestations extends Component {
  state = {
    sideDrawerOpen: false,
    open: true
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

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
          <h1 className={classes.title}>{data.title}</h1>
          <p className={classes.paragraphe}> {data.lireAttentivement.l1} </p>
          <p className={classes.paragraphe}> {data.lireAttentivement.l2} </p>
          <p className={classes.paragraphe}> {data.lireAttentivement.l3} </p>
          <p className={classes.paragraphe}> {data.lireAttentivement.l4} </p>

          <h3 className={classes.little_title}>
            {data.conseilPresseMarketingTitle}
          </h3>
          <p className={classes.paragraphe}>
            Responsable éditorial : Mr le Directeur
          </p>
          <p className={classes.paragraphe}>Téléphone :0182370970 -</p>
          <p className={classes.paragraphe}>Email : contact@cpmparis.fr</p>
          <p className={classes.paragraphe}>Site Web : www.cpmparis.fr</p>
          <p className={classes.paragraphe}>Hébergeur : 1&1 IONOS SARL</p>
          <p className={classes.paragraphe}>
            7 place de la Gare, 57201 SARREGUEMINES
          </p>
          <p className={classes.paragraphe}>Site Web : www.ionos.fr</p>
          <p className={classes.paragraphe}>
            {data.conseilPresseMarketingText}
          </p>
          <h3 className={classes.little_title}>{data.cookies}</h3>
          <p className={classes.paragraphe}>{data.cookiesText}</p>
          <h3 className={classes.little_title}>{data.liensHypertexts}</h3>
          <p className={classes.paragraphe}>{data.liensHypertextsText}</p>
          <p className={classes.paragraphe}>{data.liensHypertextsText2}</p>
          <h3 className={classes.little_title}>{data.servicesFournis}</h3>
          <p className={classes.paragraphe}>{data.servicesFournisText}</p>
          <h3 className={classes.little_title}>{data.donnees}</h3>
          <p className={classes.paragraphe}>{data.donnesText}</p>
          <p className={classes.paragraphe}>{data.donneesText2}</p>
          <p className={classes.paragraphe}>{data.donneesText3}</p>
          <h3 className={classes.little_title}>
            {data.proprieteIntellectuelle}
          </h3>
          <p className={classes.paragraphe}>
            {data.proprieteIntellectuelleText}
          </p>
          <p className={classes.paragraphe}>
            {data.proprieteIntellectuelleText2}
          </p>
          <h3 className={classes.little_title}>{data.CNIL}</h3>
          <p className={classes.paragraphe}>{data.CNILText}</p>
          <h3 className={classes.little_title}>{data.donneesPersonnelles}</h3>
          <p className={classes.paragraphe}>{data.donneesPersonnellesText}</p>
        </div>
        {/* <Footer className={classes.footer_legals} /> */}
      </Layout>
    );
  }
}

export default Prestations;
