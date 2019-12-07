import React, { Component } from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawder';
import BackDrop from '../Navigation/BackDrop/BackDrop';
import Footer from '../Home/Footer/Footer';

import Layout from '../../hoc/Layout/Layout';

import classes from './Prestations.module.css';

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
        <div>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backDrop}
          <div
            style={{
              width: '100%',
              height: '560px',
              // backgroundColor: 'blue',
              marginTop: '2%'
            }}
          >
            <div className={classes.agency}>
              <h1>WEB AGENCY</h1>
              <p>
                mensis itaque difficultatibus multis et nive ubi prope Rauracum
                ventum supercilia resistente multitudine Alamanna pontem navium
                conpage vi nimia vetabantur ritu convolantibus telis, et cum id
                inpossibile.
              </p>
            </div>
            <p>
              mensis itaque difficultatibus multis et nive ubi prope Rauracum
              ventum supercilia resistente multitudine Alamanna pontem navium
              conpage vi nimia vetabantur ritu convolantibus telis, et cum id
              inpossibile.
            </p>
            <div className={classes.one}></div>
            <div className={classes.two}></div>
            <div className={classes.three}></div>
          </div>
          <Footer />
        </div>
      </Layout>
    );
  }
}

export default Prestations;
