import React from 'react';

import Layout from '../../../hoc/Layout/Layout';
import cpmLogo from '../../../assets/images/cpm-logo/cpm-logo.png';
import classes from './Footer.module.css';
import { NavLink } from 'react-router-dom';

const footer = () => (
  <Layout>
    <div className={classes.wrapper_footer}>
      <div>
        <img
          className={classes.logo_image}
          src={cpmLogo}
          width="150%"
          alt="CPM-LOGO"
        />
      </div>
      <div className={classes.equipe}>
        <p>
          <p id={classes.top1} className={classes.span}>
            L'équipe CPM à votre écoute
          </p>{' '}
          <p className={classes.span}>du lundi au jeudi de 9h00 à 18h00</p>{' '}
          <p className={classes.span}>et le vendredi de 9h00 à 17h00</p>{' '}
        </p>
      </div>
      <div className={classes.addresse}>
        <p>
          <p id={classes.top2} className={classes.span}>
            Centre d'affaires Porte de Paris
          </p>{' '}
          <p className={classes.span}>CPM 440 Clos de la Courtine</p>{' '}
          <p className={classes.span}>93160 Noisy-Le-Grand</p>{' '}
        </p>
      </div>
      <div className={classes.contact}>
        <p>
          <p id={classes.top3} className={classes.span}>
            CONTACTEZ-NOUS
          </p>
          <p className={classes.span}>01 82 37 09 70</p>{' '}
          <p className={classes.span}>contact@cpmparis.fr</p>{' '}
        </p>
      </div>
      <div className={classes.mentionlégales}>
        <p>
          <NavLink exact to="/mentions-légales">
            MENTIONS LÉGALES
          </NavLink>
        </p>
      </div>
    </div>
  </Layout>
);

export default footer;
