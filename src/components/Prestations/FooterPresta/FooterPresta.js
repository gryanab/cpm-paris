import React from 'react';

import Layout from '../../../hoc/Layout/Layout';
import cpmLogo from '../../../assets/images/cpm-logo/cpm-logo.png';
import './FooterPresta.css';
import { NavLink } from 'react-router-dom';

const footerPresta = () => (
  <Layout>
    <div className="wrapper-footer-presta">
      <div>
        <img
          className="logo_img_presta"
          src={cpmLogo}
          width="140%"
          alt="CPM-LOGO"
        />
      </div>
      <div className="equipe">
        <p>
          <p id="top1" className="span">
            L'équipe CPM à votre écoute
          </p>{' '}
          <p className="span">du lundi au jeudi de 9h00 à 18h00</p>{' '}
          <p className="span">et le vendredi de 9h00 à 17h00</p>{' '}
        </p>
      </div>
      <div className="addresse">
        <p>
          <p id="top2" className="span">
            Centre d'affaires Porte de Paris
          </p>{' '}
          <p className="span">CPM 440 Clos de la Courtine</p>{' '}
          <p className="span">93160 Noisy-Le-Grand</p>{' '}
        </p>
      </div>
      <div className="contact">
        <p>
          <p id="top3" className="span">
            CONTACTEZ-NOUS
          </p>
          <p className="span">01 82 37 09 70</p>{' '}
          <p className="span">contact@cpmparis.fr</p>{' '}
        </p>
      </div>
      <div className="mentionslégales">
        <p>
          <NavLink exact to="/mentions-légales">
            MENTIONS LÉGALES
          </NavLink>
        </p>
      </div>
    </div>
  </Layout>
);

export default footerPresta;
