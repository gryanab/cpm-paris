import React, { Component } from 'react';

import Layout from '../../../hoc/Layout/Layout';
import classes from './ScrollableMenu.module.css';
import lodge_37 from '../../../assets/images/scrollableMenu/37_lodge.png';
import admr from '../../../assets/images/scrollableMenu/admr.png';
import adpei from '../../../assets/images/scrollableMenu/adpei.png';
import alphatex from '../../../assets/images/scrollableMenu/alphatex.png';
import atelier_chocolat from '../../../assets/images/scrollableMenu/atelier_chocolat.png';
import bayeux_museum from '../../../assets/images/scrollableMenu/bayeux_museum.png';
import blatterie from '../../../assets/images/scrollableMenu/blatterie.png';
import cambresis from '../../../assets/images/scrollableMenu/cambresis.png';
import chateau_barrabaque from '../../../assets/images/scrollableMenu/chateau_barrabaque.png';
import chateau_breteuil from '../../../assets/images/scrollableMenu/chateau_breteuil.png';
import chateau_hattonchatel from '../../../assets/images/scrollableMenu/chateau_hattonchatel.png';
import cmv from '../../../assets/images/scrollableMenu/cmv.png';
import dronapex from '../../../assets/images/scrollableMenu/dronapex.png';
import dupont from '../../../assets/images/scrollableMenu/dupont.png';
import einai from '../../../assets/images/scrollableMenu/einai.png';
import eprp from '../../../assets/images/scrollableMenu/eprp.png';
import floreal from '../../../assets/images/scrollableMenu/floreal.png';
import gsa from '../../../assets/images/scrollableMenu/gsa.png';
import ibis_budget from '../../../assets/images/scrollableMenu/ibis_budget.png';
import ibis_hotel from '../../../assets/images/scrollableMenu/ibis_hotel.png';
import jardins_sothys from '../../../assets/images/scrollableMenu/jardins_sothys.png';
import life_design from '../../../assets/images/scrollableMenu/life_design.png';
import maylis from '../../../assets/images/scrollableMenu/maylis.png';
import meilleur_banquier from '../../../assets/images/scrollableMenu/meilleur_banquier.png';
import motel_amandiers from '../../../assets/images/scrollableMenu/motel_amandiers.png';
import musée_galloromain from '../../../assets/images/scrollableMenu/musée_galloromain.png';
import mybubelly from '../../../assets/images/scrollableMenu/mybubelly.png';
import natur_house from '../../../assets/images/scrollableMenu/natur_house.png';
import positiveyou from '../../../assets/images/scrollableMenu/positiveyou.png';
import safran from '../../../assets/images/scrollableMenu/safran.png';
import singer_immo from '../../../assets/images/scrollableMenu/singer_immo.png';
import snef from '../../../assets/images/scrollableMenu/snef.png';
import synergys from '../../../assets/images/scrollableMenu/synergys.png';
import train_world from '../../../assets/images/scrollableMenu/train_world.png';
import tsps from '../../../assets/images/scrollableMenu/tsps.png';
import volumee from '../../../assets/images/scrollableMenu/volume-e.png';
import vousfinancer from '../../../assets/images/scrollableMenu/vousfinancer.png';

const ref_list = [
  lodge_37,
  admr,
  adpei,
  alphatex,
  atelier_chocolat,
  bayeux_museum,
  blatterie,
  cambresis,
  chateau_barrabaque,
  chateau_breteuil,
  chateau_hattonchatel,
  cmv,
  dronapex,
  dupont,
  einai,
  eprp,
  floreal,
  gsa,
  ibis_budget,
  ibis_hotel,
  jardins_sothys,
  life_design,
  maylis,
  meilleur_banquier,
  motel_amandiers,
  musée_galloromain,
  mybubelly,
  natur_house,
  positiveyou,
  safran,
  singer_immo,
  snef,
  synergys,
  train_world,
  tsps,
  volumee,
  vousfinancer
];

class scrollableMenu extends Component {
  render() {
    const references = [];

    for (let i = 0; i < ref_list.length; i++) {
      references.push(<img src={ref_list[i]} alt={ref_list[i]} width="20%" />);
    }

    return (
      <Layout>
        <div className={classes.scrollmenu}>{references}</div>
      </Layout>
    );
  }
}

export default scrollableMenu;
