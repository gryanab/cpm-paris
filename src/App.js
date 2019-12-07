import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './components/Home/Home';
import Prestations from './components/Prestations/Prestations';
import Magazine from './components/Magazine/Magazine';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          {/* <Route path="/references" component={References} /> */}
          {/* <Route path="/mentions-legales" component={Legals} /> */}
          <Route path="/prestations" component={Prestations} />
          <Route path="/magazine" component={Magazine} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
