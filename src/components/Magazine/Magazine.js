import React, { useState } from 'react';
import './turn.js';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawder';
import BackDrop from '../Navigation/BackDrop/BackDrop';
import FooterPresta from '../Prestations/FooterPresta/FooterPresta';
import Layout from '../../hoc/Layout/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import mag20181 from '../../assets/images/mag-2018/mag-2018-1.jpg';
import mag20191 from '../../assets/images/mag-2019/mag-2019-1.jpg';
import mag20201 from '../../assets/images/mag-2020/mag-2020-1.jpg';
import classes from './Magazine.module.css';
import { Image } from 'react-bootstrap';
import MagazineModal18 from './Modal/MagazineModal18';
import MagazineModal19 from './Modal/MagazineModal19';
import MagazineModal20 from './Modal/MagazineModal20';
import { Link } from 'react-router-dom';
export default function Magazine() {
  const [modalShow18, setModalShow18] = useState(false);
  const [modalShow19, setModalShow19] = useState(false);
  const [modalShow20, setModalShow20] = useState(false);
  // const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const state = {
    sideDrawerOpen: false,
  };
  const drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  const backDropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };
  let backDrop;
  if (state.sideDrawerOpen) {
    backDrop = <BackDrop click={backDropClickHandler} />;
  }
  return (
    <Layout>
      <div className={classes.white}></div>
      <div className={classes.nav_magazine_not_mobile}>
        <Toolbar drawerClickHandler={drawerToggleClickHandler} />
        <SideDrawer show={state.sideDrawerOpen} />
      </div>
      <div className={classes.nav_magazine_mobile}>
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
      </div>
      {backDrop}
      <p className={classes.magazine_mobile_display}>
        Retrouvez une représentation de nos magazines sur tablettes et desktop!
      </p>
      <div className={classes.magazine_display}>
        <div className={classes.magazine_display_back}>
          <Image
            className={classes.magazine_on_the_left}
            src={mag20181}
            thumbnail
            width="200px"
            onClick={() => setModalShow18(true)}
          />
          <Image
            className={classes.magazine_on_the_right}
            src={mag20191}
            thumbnail
            width="200px"
            onClick={() => setModalShow19(true)}
          />
          <Image
            className={classes.magazine_on_the_right}
            src={mag20201}
            thumbnail
            width="200px"
            onClick={() => setModalShow20(true)}
          />
        </div>
      </div>
      <MagazineModal18
        show={modalShow18}
        onHide={() => setModalShow18(false)}
      />
      <MagazineModal19
        show={modalShow19}
        onHide={() => setModalShow19(false)}
      />
      <MagazineModal20
        show={modalShow20}
        onHide={() => setModalShow20(false)}
      />
      <FooterPresta />
    </Layout>
  );
}
