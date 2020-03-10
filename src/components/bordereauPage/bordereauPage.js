import React, { Component } from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawder';
import BackDrop from '../Navigation/BackDrop/BackDrop';
import classes from './bordereau.module.css';
import Footer from '../Home/Footer/Footer';

import { DateTime } from 'luxon';

import Retract1 from '../../assets/images/mentionsLégales/retract(1)-1.jpg';
import Retract2 from '../../assets/images/mentionsLégales/retract(1)-2.jpg';

class Bordereau extends Component {
  state = {
    sideDrawerOpen: false,
    open: true
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    console.log('Date', DateTime.now);
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
    if (this.state.sideDrawerOpen) {
      backDrop = <BackDrop click={this.backDropClickHandler} />;
    }

    return (
      <div>
        <div className={classes.white}></div>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} height="" />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backDrop}
        <h1 className={classes.title_bordereau}> Bordereau de rétractation </h1>
        <div>
          <img className={classes.retract1} src={Retract1} alt="Retract1" />
          <img className={classes.images} src={Retract2} alt="Retract2" />
        </div>
        <p> {DateTime.now} </p>
      </div>
    );
  }
}

export default Bordereau;
