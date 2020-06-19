import React from 'react';

import Layout from '../../../hoc/Layout/Layout';
import classes from './Sigle.module.css';

const sigle = () => (
  <Layout>
    <div className={classes.sigles__div}>
      <div className={classes.sigle_1}>
        <p className={classes.title}>EN TOUTE CONFIANCE...</p>
        <p className={classes.text}>
          Véritable partenaire <br /> pour la communication <br /> et le
          développement des <br /> entreprises que nous accompagnons, <br />{' '}
          nous proposons des produits <br />
          fiables permettant d'accroitre <br /> la notoriété et l'amélioration{' '}
          <br /> de la visibilité de l'entreprise.
        </p>
      </div>
      <div className={classes.sigle_2}>
        <p className={classes.title}>UN DOMAINE MAÎTRISÉ</p>
        <p className={classes.text}>
          CPM s'est spécialisé dans <br /> les ouvrages techniques <br />{' '}
          professionnels <br /> tel que Référence <br /> Énergie, Contact CE...
        </p>
      </div>
      <div className={classes.sigle_3}>
        <p className={classes.title}>
          UNE ÉQUIPE <br /> À VOTRE ÉCOUTE{' '}
        </p>
        <p className={classes.text}>
          En effet, nous possédons une grande <br /> expérience en matière de
          conception, <br />
          de réalisation et de diffusion <br /> d'ouvrages professionnels
          ciblés. <br /> Dans le but de garantir <br /> une prestation complète,{' '}
          <br /> notre équipe expérimentée se tient <br /> à votre disposition.
        </p>
      </div>
    </div>
  </Layout>
);

export default sigle;
