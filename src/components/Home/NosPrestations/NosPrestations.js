import React from 'react';
import Layout from '../../../hoc/Layout/Layout';

import classes from './NosPrestations.module.css';
import refInterne from '../../../assets/images/prestations/ref-interne.png';
import designGraphique from '../../../assets/images/prestations/design-graphique.png';
import formation from '../../../assets/images/prestations/formation.png';
import conseilCom from '../../../assets/images/prestations/conseil-com.png';
import webAgency from '../../../assets/images/prestations/web-agency.png';
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const nosPrestations = () => (
  <Layout>
    <h3 className={classes.nos_prestations} id="nosPrestations">
      Nos prestations
    </h3>
    <div className={classes.wrapper_prestations}>
      <div className={classes.one}>
        <Link to="/prestations/ref-interne" className={classes.prestas}>
          <img src={refInterne} width="100%" />
        </Link>
        <p className={classes.ref__interne}>
          RÉFÉRENCEMENT <br /> INTERNE
        </p>
        <p className={classes.ref__interne__text}>
          Campagnes numériques <br /> professionnelles. Revues spécialisées{' '}
          <br /> dans les domaines techniques <br /> comportant plusieurs
          catégories <br /> en fonction des secteurs d'activités <br />{' '}
          génériques déterminés.
        </p>
      </div>
      <div className={classes.two}>
        <Link to="/prestations/web-agency" className={classes.prestas}>
          <img src={webAgency} width="100%" />
        </Link>
        <p className={classes.ref__interne}>
          WEB <br /> AGENCY
        </p>
        <p className={classes.ref__interne__text}>
          Nous vous assistons de la conception <br /> à la gestion en passant
          par la réalisation <br /> de vos outils de communications internet,{' '}
          <br /> intranet. Notre agence web est capable <br />
          de répondre à tous vos besoins et <br /> d'élaborer une véritable
          stratégie numérique.
        </p>
      </div>
      <div className={classes.three}>
        <Link to="/prestations/design-graphique" className={classes.prestas}>
          <img src={designGraphique} width="100%" />
        </Link>
        <p className={classes.ref__interne}>
          DESIGN <br /> GRAPHIQUE
        </p>
        <p className={classes.ref__interne__text}>
          Notre service de création intégré <br /> est en mesure de répondre
          rapidement <br /> et efficacement à tous vos besoins <br /> en matière
          de communication. <br /> Logo, carte de visite, flyers, <br />{' '}
          brochures, plaquettes.
        </p>
      </div>
      <div className={classes.four}>
        <Link to="/prestations/conseil-comm" className={classes.prestas}>
          <img src={conseilCom} width="100%" />
        </Link>
        <p className={classes.ref__interne}>
          CONSEIL EN <br /> COMMUNICATION
        </p>
        <p className={classes.ref__interne__text}>
          Notre priorité absolue est de fournir <br /> des services de la plus
          haute qualité. <br /> Nous pouvons ainsi aiguiller <br /> et
          conseiller au mieux nos clients <br /> afin de pleinement les
          satisfaire.
        </p>
      </div>
      <div className={classes.five}>
        <Link to="/prestations/formation" className={classes.prestas}>
          <img src={formation} width="100%" />
        </Link>
        <p className={classes.ref__interne}>FORMATION</p>
        <p className={classes.ref__interne__text}>
          Nous sommes fiers de l'efficacité <br /> de nos méthodes de formation,
          mais <br /> nous nous efforçons de nous <br /> améliorer pour fournir
          toujours
          <br /> de meilleurs résultats.
        </p>
      </div>
    </div>
    <div className={classes.wrapper_prestations_mobile}>
      <Row noGutters>
        <Col sm={{ span: 4, offset: 1 }} xs={{ span: 4, offset: 1 }}>
          <div className={classes.one}>
            <img src={refInterne} width="100%" />
            <p className={classes.ref__interne}>
              RÉFÉRENCEMENT <br /> INTERNE
            </p>
          </div>
        </Col>
        <Col sm={{ span: 4, offset: 2 }} xs={{ span: 4, offset: 2 }}>
          <div className={classes.two}>
            <img src={webAgency} width="100%" />
            <p className={classes.ref__interne}>
              WEB <br /> AGENCY
            </p>
          </div>
        </Col>
      </Row>
      <Row noGutters>
        <Col sm={{ span: 4, offset: 1 }} xs={{ span: 4, offset: 1 }}>
          <div className={classes.three}>
            <img src={designGraphique} width="100%" />
            <p className={classes.ref__interne}>
              DESIGN <br /> GRAPHIQUE
            </p>
          </div>
        </Col>
        <Col sm={{ span: 4, offset: 2 }} xs={{ span: 4, offset: 2 }}>
          <div className={classes.four}>
            <img src={conseilCom} width="100%" />
            <p className={classes.ref__interne}>
              CONSEIL EN <br /> COMMUNICATION
            </p>
          </div>
        </Col>
      </Row>
      <Row noGutters>
        <Col sm={{ span: 4, offset: 4 }} xs={{ span: 4, offset: 4 }}>
          <div className={classes.five}>
            <img src={formation} width="100%" />
            <p className={classes.ref__interne}>FORMATION</p>
          </div>
        </Col>
      </Row>
    </div>
    <div className={classes.wrapper_prestations_tablet}>
      <Row noGutters>
        <Col sm={{ span: 4, offset: 1 }} xs={{ span: 4, offset: 1 }}>
          <div className={classes.one}>
            <Link to="/prestations/ref-interne" className={classes.prestas}>
              <img src={refInterne} width="100%" />
            </Link>
            <p className={classes.ref__interne}>
              RÉFÉRENCEMENT <br /> INTERNE
            </p>
          </div>
        </Col>
        <Col sm={{ span: 4, offset: 2 }} xs={{ span: 4, offset: 2 }}>
          <div className={classes.two}>
            <Link to="/prestations/web-agency" className={classes.prestas}>
              <img src={webAgency} width="100%" />
            </Link>
            <p className={classes.ref__interne}>
              WEB <br /> AGENCY
            </p>
          </div>
        </Col>
      </Row>
      <Row noGutters>
        <Col sm={{ span: 4, offset: 1 }} xs={{ span: 4, offset: 1 }}>
          <div className={classes.three}>
            <Link
              to="/prestations/design-graphique"
              className={classes.prestas}
            >
              <img src={designGraphique} width="100%" />
            </Link>
            <p className={classes.ref__interne}>
              DESIGN <br /> GRAPHIQUE
            </p>
          </div>
        </Col>
        <Col sm={{ span: 4, offset: 2 }} xs={{ span: 4, offset: 2 }}>
          <div className={classes.four}>
            <Link to="/prestations/conseil-comm" className={classes.prestas}>
              <img src={conseilCom} width="100%" />
            </Link>
            <p className={classes.ref__interne}>
              CONSEIL EN <br /> COMMUNICATION
            </p>
          </div>
        </Col>
      </Row>
      <Row noGutters>
        <Col sm={{ span: 4, offset: 4 }} xs={{ span: 4, offset: 4 }}>
          <div className={classes.five}>
            <Link to="/prestations/formation" className={classes.prestas}>
              <img src={formation} width="100%" />
            </Link>
            <p className={classes.ref__interne}>FORMATION</p>
          </div>
        </Col>
      </Row>
    </div>
  </Layout>
);
export default nosPrestations;
