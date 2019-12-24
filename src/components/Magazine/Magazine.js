import React, { Component } from 'react';
import Turn from './Turn /Turn';
import $ from 'jquery';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawder';
import BackDrop from '../Navigation/BackDrop/BackDrop';
import FooterPresta from '../Prestations/FooterPresta/FooterPresta';
import Layout from '../../hoc/Layout/Layout';

import mag20181 from '../../assets/images/mag-2018/mag-2018-1.jpg';
import mag20182 from '../../assets/images/mag-2018/mag-2018-2.jpg';
import mag20183 from '../../assets/images/mag-2018/mag-2018-3.jpg';
import mag20184 from '../../assets/images/mag-2018/mag-2018-4.jpg';
import mag20185 from '../../assets/images/mag-2018/mag-2018-5.jpg';
import mag20186 from '../../assets/images/mag-2018/mag-2018-6.jpg';
import mag20187 from '../../assets/images/mag-2018/mag-2018-7.jpg';
import mag20188 from '../../assets/images/mag-2018/mag-2018-8.jpg';
import mag20189 from '../../assets/images/mag-2018/mag-2018-9.jpg';
import mag201810 from '../../assets/images/mag-2018/mag-2018-10.jpg';
import mag201811 from '../../assets/images/mag-2018/mag-2018-11.jpg';
import mag201812 from '../../assets/images/mag-2018/mag-2018-12.jpg';
import mag201813 from '../../assets/images/mag-2018/mag-2018-13.jpg';
import mag201814 from '../../assets/images/mag-2018/mag-2018-14.jpg';
import mag201815 from '../../assets/images/mag-2018/mag-2018-15.jpg';
import mag201816 from '../../assets/images/mag-2018/mag-2018-16.jpg';
import mag201817 from '../../assets/images/mag-2018/mag-2018-17.jpg';
import mag201818 from '../../assets/images/mag-2018/mag-2018-18.jpg';
import mag201819 from '../../assets/images/mag-2018/mag-2018-19.jpg';
import mag201820 from '../../assets/images/mag-2018/mag-2018-20.jpg';
import mag201821 from '../../assets/images/mag-2018/mag-2018-21.jpg';
import mag201822 from '../../assets/images/mag-2018/mag-2018-22.jpg';

import mag20191 from '../../assets/images/mag-2019/mag-2019-1.jpg';
import mag20192 from '../../assets/images/mag-2019/mag-2019-2.jpg';
import mag20193 from '../../assets/images/mag-2019/mag-2019-3.jpg';
import mag20194 from '../../assets/images/mag-2019/mag-2019-4.jpg';
import mag20195 from '../../assets/images/mag-2019/mag-2019-5.jpg';
import mag20196 from '../../assets/images/mag-2019/mag-2019-6.jpg';
import mag20197 from '../../assets/images/mag-2019/mag-2019-7.jpg';
import mag20198 from '../../assets/images/mag-2019/mag-2019-8.jpg';
import mag20199 from '../../assets/images/mag-2019/mag-2019-9.jpg';
import mag201910 from '../../assets/images/mag-2019/mag-2019-10.jpg';
import mag201911 from '../../assets/images/mag-2019/mag-2019-11.jpg';
import mag201912 from '../../assets/images/mag-2019/mag-2019-12.jpg';
import mag201913 from '../../assets/images/mag-2019/mag-2019-13.jpg';
import mag201914 from '../../assets/images/mag-2019/mag-2019-14.jpg';
import mag201915 from '../../assets/images/mag-2019/mag-2019-15.jpg';

import classes from './Magazine.module.css';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const options = {
  width: 550,
  height: 400,
  display: 'double',
  autoCenter: true,
  acceleration: true,
  elevation: 50,
  gradients: !$.isTouch,
  when: {
    turned: function(e, page) {
      console.log('Current view: ', $(this).turn('view'));
    }
  }
};

const pages2018 = [
  mag20181,
  mag20182,
  mag20183,
  mag20184,
  mag20185,
  mag20186,
  mag20187,
  mag20188,
  mag20189,
  mag201810,
  mag201811,
  mag201812,
  mag201813,
  mag201814,
  mag201815,
  mag201816,
  mag201817,
  mag201818,
  mag201819,
  mag201820,
  mag201821,
  mag201822
];
const pages2019 = [
  mag20191,
  mag20192,
  mag20193,
  mag20194,
  mag20195,
  mag20196,
  mag20197,
  mag20198,
  mag20199,
  mag201910,
  mag201911,
  mag201912,
  mag201913,
  mag201914,
  mag201915
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
        <div className={classes.white}></div>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backDrop}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '20%'
          }}
        >
          <Row>
            <Col sm={{ span: 4, offset: 3 }}>
              <Turn options={options} className="magazine">
                {pages2019.map((page, index) => (
                  <div key={index} className="page">
                    <img src={page} alt="" />
                  </div>
                ))}
              </Turn>
            </Col>
            {/* <Col sm={4}>
              <Turn options={options} className="magazine">
                {pages2019.map((page, index) => (
                  <div key={index} className="page">
                    <img src={page} alt="" />
                  </div>
                ))}
              </Turn>
            </Col> */}
          </Row>
        </div>
        <FooterPresta />
      </Layout>
    );
  }
}

export default Magazine;
