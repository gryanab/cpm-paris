import React from 'react';

import Layout from '../../../hoc/Layout/Layout';
import classes from './Conseil.module.css';

const conseil = () => {
  let pro = {
    fontWeight: 'bold',
    color: 'rgb(106, 106, 106)',
    marginBottom: '0'
  };
  return (
    <Layout>
      <div className={classes.conseil_presse_marketing}>
        <p className={classes.text_conseil}>
          <span>Conseil</span> presse{' '}
        </p>
        <p className={classes.text_conseil}>marketing </p>
      </div>
      <div className={classes.conseils_en_communication_par_des_professionnels}>
        <div
          className={
            classes.conseils_en_communication_par_des_professionnels_text
          }
        >
          <p className={classes.plus_sign}>+</p>
          <p className={classes.text_conseil}>Conseil en </p>
          <p className={classes.text_conseil}>communications </p>
          <p className={classes.text_conseil}>par des </p>
          <p style={pro}>professionnels </p>
        </div>
      </div>
    </Layout>
  );
};

export default conseil;
