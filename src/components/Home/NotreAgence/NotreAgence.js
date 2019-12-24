import React from 'react';

import Layout from '../../../hoc/Layout/Layout';
import classes from './NotreAgence.module.css';

const notreAgence = () => (
  <Layout>
    <section id="our-agency">
      <div className={classes.image__agency}></div>
      <div className={classes.our__agency}>
        <p>Notre agence</p>
        <p>
          Fort d'une expérience de plus de 20 ans dans le domaine <br /> de la
          communication, les socétés les plus prestigieuse de tous les horizons{' '}
          <br />
          nous font confiance. Nous sommes fiers de fournir un service <br />{' '}
          d'exception garantissant une satisfaction chez tous nos clients.{' '}
          <br /> Notre métier: satisfaire nos annonceurs en proposant des
          solutions <br />
          adaptées à leur besoin de communication et à leur attente de
          rentabilité.
        </p>
      </div>
    </section>
  </Layout>
);

export default notreAgence;
