import React from 'react';

import Layout from '../../../hoc/Layout/Layout';
import './Conseil.css';

const conseil = () => {
  let pro = {
    fontWeight: 'bold',
    color: 'rgb(106, 106, 106)'
  };
  return (
    <Layout>
      <div className="conseil_presse_marketing">
        <p>
          <span>Conseil</span> presse{' '}
        </p>
        <p>marketing </p>
      </div>
      <div className="conseils_en_communication_par_des_professionnels">
        <div className="conseils_en_communication_par_des_professionnels_text">
          <p className="plus">+</p>
          <p>Conseil en </p>
          <p>communications </p>
          <p>par des </p>
          <p style={pro}>professionnels </p>
        </div>
      </div>
    </Layout>
  );
};

export default conseil;
