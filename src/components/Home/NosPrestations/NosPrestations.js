import React from 'react';
import Layout from '../../../hoc/Layout/Layout';

import './NosPrestations.css';
import refInterne from '../../../assets/images/prestations/ref-interne.png';
import designGraphique from '../../../assets/images/prestations/design-graphique.png';
import formation from '../../../assets/images/prestations/formation.png';
import conseilCom from '../../../assets/images/prestations/conseil-com.png';
import webAgency from '../../../assets/images/prestations/web-agency.png';

const nosPrestations = () => (
  <Layout>
    <h3 id="nos-prestations">Nos prestations</h3>
    <div className="wrapper-prestations">
      <div className="one">
        <a href="/" id="prestas">
          <img src={refInterne} width="100%" />
        </a>
        <p className="ref__interne">
          RÉFÉRENCEMENT <br /> INTERNE
        </p>
        <p className="ref__interne__text">
          Camapgnes numériques <br /> professionnelles. Revues spécialisées{' '}
          <br /> dans les domaines technqiues <br /> comportant plusieurs
          catégories <br /> en fonxtion des secteurs d'activités <br />{' '}
          génériques déterminés.
        </p>
      </div>
      <div className="two">
        <a href="/" id="prestas">
          <img src={webAgency} width="100%" />
        </a>
        <p className="ref__interne">
          WEB <br /> AGENCY
        </p>
        <p className="ref__interne__text">
          Nous vous assistons de la conception <br /> à la gestion en passant
          par la réalisation <br /> de vos outils de communications internet,{' '}
          <br /> intranet. Notre agence web est capable <br />
          de répondre à tous vos beosins et <br /> d'élaborer une véritable
          stratégie digitale.
        </p>
      </div>
      <div className="three">
        <a href="/" id="prestas">
          <img src={designGraphique} width="100%" />
        </a>
        <p className="ref__interne">
          DESIGN <br /> GRAPHIQUE
        </p>
        <p className="ref__interne__text">
          Notre service de création intégré <br /> est en mesure de répondre
          rapidement <br /> et efficacement à tous vos besoins <br /> en matière
          de communication. <br /> Logo, carte de visite, flyers, <br />{' '}
          brochures, plaquettes.
        </p>
      </div>
      <div className="four">
        <a href="/" id="prestas">
          <img src={conseilCom} width="100%" />
        </a>
        <p className="ref__interne">
          CONSEIL EN <br /> COMMUNICATION
        </p>
        <p className="ref__interne__text">
          Notre priorité absolue est de fournir <br /> des services de la plus
          haute qualité. <br /> Nous pouvons ainsi aiguiller <br /> et
          conseiller au mieux nos clients <br /> afin de pleinement les
          satisfaire.
        </p>
      </div>
      <div className="five">
        <a href="/" id="prestas">
          <img src={formation} width="100%" />
        </a>
        <p className="ref__interne">FORMATION</p>
        <p className="ref__interne__text">
          Nous somme fiers de l'efficacité <br /> de nos méthodes de formation,
          mais <br /> nous nous efforçons de nous <br /> améliorer pour fournir
          toujours
          <br /> de meilleurs résultats.
        </p>
      </div>
    </div>
  </Layout>
);

export default nosPrestations;
