import React from 'react';

import Layout from '../../../hoc/Layout/Layout';
import classes from './Conseil.module.css';
import cpmLogoLong from '../../../assets/images/cpm-logo/LogoCPM_Long (1).png';

const conseil = () => {
  let pro = {
    fontWeight: 'bold',
    color: 'rgb(106, 106, 106)',
    marginBottom: '0',
  };
  return (
    <Layout>
      <img
        className={classes.cpmLogoLongTablette}
        src={cpmLogoLong}
        width="30%"
      ></img>
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
          <p className={classes.text_conseil}>Notre métier, Conseil </p>
          <p className={classes.text_conseil}> en communication </p>
          <p className={classes.text_conseil}>pour des </p>
          <p style={pro}>professionnels </p>
        </div>
      </div>
    </Layout>
  );
};

export default conseil;
