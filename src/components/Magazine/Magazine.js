import React, { Component } from 'react';
import Turn from './Turn /Turn';
import $ from 'jquery';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawder';
import BackDrop from '../Navigation/BackDrop/BackDrop';
import Footer from '../Home/Footer/Footer';

import Layout from '../../hoc/Layout/Layout';

const options = {
  width: 700,
  height: 400,
  //   autoCenter: true,
  display: 'double',
  acceleration: true,
  elevation: 50,
  gradients: !$.isTouch,
  when: {
    turned: function(e, page) {
      console.log('Current view: ', $(this).turn('view'));
    }
  }
};

const pages = [
  'https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/01.jpg',
  'https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/02.jpg',
  'https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/03.jpg',
  'https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/04.jpg',
  'https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/05.jpg',
  'https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/06.jpg'
];

class Magazine extends Component {
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
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backDrop}
        <div
          style={{
            position: 'absolute',
            top: '300px',
            left: '500px',
            width: '100px'
          }}
        >
          Tournez la page avec votre souris !
        </div>
        <Turn options={options} className="magazine">
          {pages.map((page, index) => (
            <div key={index} className="page">
              <img src={page} alt="" />
            </div>
          ))}
        </Turn>
        <Footer />
      </Layout>
    );
  }
}

export default Magazine;
