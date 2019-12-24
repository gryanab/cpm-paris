import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './components/Home/Home';
import RefInterne from './components/Prestations/RefInterne/RefInterne';
import WebAgency from './components/Prestations/WebAgency/WebAgency';
import DesignGraphique from './components/Prestations/DesignGraphique/DesignGraphique';
import ConseilComm from './components/Prestations/ConseilComm/ConseilComm';
import Magazine from './components/Magazine/Magazine';
import Formation from './components/Prestations/Formation/Formation';
import NotreAgence from './components/Home/NotreAgence/NotreAgence';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          {/* <Route path="/references" component={References} />  */}
          {/* <Route path="/mentions-legales" component={Legals} /> */}
          <Route path="/prestations/formation" component={Formation} />
          <Route path="/prestations/conseil-comm" component={ConseilComm} />
          <Route
            path="/prestations/design-graphique"
            component={DesignGraphique}
          />
          <Route path="/prestations/web-agency" component={WebAgency} />
          <Route path="/prestations/ref-interne" component={RefInterne} />
          <Route path="/magazine" component={Magazine} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
