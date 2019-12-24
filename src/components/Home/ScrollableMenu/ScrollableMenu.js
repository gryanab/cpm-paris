import React from 'react';

import Layout from '../../../hoc/Layout/Layout';
import classes from './ScrollableMenu.module.css';
import agriculture from '../../../assets/images/scrollableMenu/agriculture.png';
import andiman from '../../../assets/images/scrollableMenu/andiman.png';
import as from '../../../assets/images/scrollableMenu/as.png';
import cmv from '../../../assets/images/scrollableMenu/cmv.png';
import dapesco from '../../../assets/images/scrollableMenu/dapesco.png';
import dupont from '../../../assets/images/scrollableMenu/dupont.png';
import floreal from '../../../assets/images/scrollableMenu/agriculture.png';
import h2ion from '../../../assets/images/scrollableMenu/h2ion.png';
import ipc from '../../../assets/images/scrollableMenu/ipc.png';
import safran from '../../../assets/images/scrollableMenu/safran.png';
import snef from '../../../assets/images/scrollableMenu/snef.png';
import sologne from '../../../assets/images/scrollableMenu/sologne.png';
import synergys from '../../../assets/images/scrollableMenu/synergys.png';
import tsps from '../../../assets/images/scrollableMenu/tsps.png';
import volumee from '../../../assets/images/scrollableMenu/volume-e.png';
import vousfinancer from '../../../assets/images/scrollableMenu/vousfinancer.png';

const scrollableMenu = () => (
  <Layout>
    <div className={classes.scrollmenu}>
      <img src={agriculture} alt="alphatex" width="20%" />
      <img src={andiman} alt="alphatex" width="20%" />
      <img src={as} alt="alphatex" width="20%" />
      <img src={cmv} alt="alphatex" width="20%" />
      <img src={dapesco} alt="alphatex" width="20%" />
      <img src={dupont} alt="alphatex" width="20%" />
      <img src={floreal} alt="alphatex" width="20%" />
      <img src={h2ion} alt="alphatex" width="20%" />
      <img src={ipc} alt="alphatex" width="20%" />
      <img src={safran} alt="alphatex" width="20%" />
      <img src={sologne} alt="alphatex" width="20%" />
      <img src={synergys} alt="alphatex" width="20%" />
      <img src={tsps} alt="alphatex" width="20%" />
      <img src={volumee} alt="alphatex" width="20%" />
      <img src={vousfinancer} alt="alphatex" width="20%" />
      <img src={snef} alt="alphatex" width="20%" />
    </div>
  </Layout>
);

export default scrollableMenu;
