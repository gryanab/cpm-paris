import React, { Component } from 'react';

import Layout from '../../hoc/Layout/Layout';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawder';
import BackDrop from '../Navigation/BackDrop/BackDrop';

import Conseil from '../Home/Conseil/Conseil';
import Sigles from '../Home/Sigles/Sigles';
import Prestations from '../Home/NosPrestations/NosPrestations';
import NotreAgence from '../Home/NotreAgence/NotreAgence';
import ScrollableMenu from '../Home/ScrollableMenu/ScrollableMenu';
import Form from '../Home/Form/Form';
import Footer from '../Home/Footer/Footer';

import classes from './Home.module.css';

class Home extends Component {
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
        <Toolbar
          drawerClickHandler={this.drawerToggleClickHandler}
          label="plot"
        />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backDrop}
        <Conseil />
        <div className={classes.white}></div>
        <Sigles />
        <NotreAgence
          ref={NotreAgence => {
            this.NotreAgence = NotreAgence;
          }}
        />
        <Prestations />
        <ScrollableMenu />
        <Form />
        <Footer />
      </Layout>
    );
  }
}

export default Home;
