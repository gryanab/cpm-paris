import React from 'react';

import Layout from '../../../hoc/Layout/Layout';
import './Sigle.css';

const sigle = () => (
  <Layout>
    <div className="sigles__div">
      <div className="sigle_1">
        <p className="title">EN TOUTE CONFIANCE...</p>
        <p className="text">
          Véritable partenaire <br /> pour la communication <br /> et le
          développement des <br /> entreprises que nous accompagnons, <br />{' '}
          nous proposons des produits <br />
          fiables permettant d'accroitre <br /> la notoriété et l'amélioration{' '}
          <br /> de la visibilité de l'entreprise.
        </p>
      </div>
      <div className="sigle_2">
        <p className="title">UN DOMAINE MAÎTRISÉ</p>
        <p className="text">
          CPM s'est spécialisé dans <br /> les ouvrages techniques <br />{' '}
          professionnels <br /> tel que Référence <br /> Énergie, Contact CE...
        </p>
      </div>
      <div className="sigle_3">
        <p className="title">UNE ÉQUIPE </p>
        <p className="title">À VOTRE ÉCOUTE... </p>
        <p className="text">
          En effet, nous possédons une grande <br /> expérience en matière de
          conception, <br />
          de réalisations et de diffusion <br /> d'ouvrages professionnels
          ciblés. <br /> Dans le but de garantir <br /> une prestation complète,{' '}
          <br /> notre équipe expérimentée se tient <br /> à votre disposition.
        </p>
      </div>
    </div>
  </Layout>
);

export default sigle;
