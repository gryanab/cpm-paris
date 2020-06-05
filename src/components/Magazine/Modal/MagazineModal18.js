import React from 'react';
import $ from 'jquery';
import '../turn';
import { Modal, Button } from 'react-bootstrap';

import mag20181 from '../../../assets/images/mag-2018/mag-2018-1.jpg';
import mag20182 from '../../../assets/images/mag-2018/mag-2018-2.jpg';
import mag20183 from '../../../assets/images/mag-2018/mag-2018-3.jpg';
import mag20184 from '../../../assets/images/mag-2018/mag-2018-4.jpg';
import mag20185 from '../../../assets/images/mag-2018/mag-2018-5.jpg';
import mag20186 from '../../../assets/images/mag-2018/mag-2018-6.jpg';
import mag20187 from '../../../assets/images/mag-2018/mag-2018-7.jpg';
import mag20188 from '../../../assets/images/mag-2018/mag-2018-8.jpg';
import mag20189 from '../../../assets/images/mag-2018/mag-2018-9.jpg';
import mag201810 from '../../../assets/images/mag-2018/mag-2018-10.jpg';
import mag201811 from '../../../assets/images/mag-2018/mag-2018-11.jpg';
import mag201812 from '../../../assets/images/mag-2018/mag-2018-12.jpg';
import mag201813 from '../../../assets/images/mag-2018/mag-2018-13.jpg';
import mag201814 from '../../../assets/images/mag-2018/mag-2018-14.jpg';
import mag201815 from '../../../assets/images/mag-2018/mag-2018-15.jpg';
import mag201816 from '../../../assets/images/mag-2018/mag-2018-16.jpg';
import mag201817 from '../../../assets/images/mag-2018/mag-2018-17.jpg';
import mag201818 from '../../../assets/images/mag-2018/mag-2018-18.jpg';
import mag201819 from '../../../assets/images/mag-2018/mag-2018-19.jpg';
import mag201820 from '../../../assets/images/mag-2018/mag-2018-20.jpg';
import mag201821 from '../../../assets/images/mag-2018/mag-2018-21.jpg';
import mag201822 from '../../../assets/images/mag-2018/mag-2018-22.jpg';

import Turn from '../Turn/Turn.js';

const options = {
  width: 650,
  height: 450,
  // autoCenter: true,
  display: 'double',
  acceleration: true,
  elevation: 50,
  gradients: !$.isTouch,
  when: {
    turned: function (e, page) {
      console.log('Current view: ', $(this).turn('view'));
    },
  },
};

const optionsTablet = {
  width: 450,
  height: 250,
  // autoCenter: true,
  display: 'double',
  acceleration: true,
  elevation: 50,
  gradients: !$.isTouch,
  when: {
    turned: function (e, page) {
      console.log('Current view: ', $(this).turn('view'));
    },
  },
};

const pages2018 = [
  mag20181,
  mag20182,
  mag20183,
  mag20184,
  mag20185,
  mag20186,
  mag20187,
  mag20188,
  mag20189,
  mag201810,
  mag201811,
  mag201812,
  mag201813,
  mag201814,
  mag201815,
  mag201816,
  mag201817,
  mag201818,
  mag201819,
  mag201820,
  mag201821,
  mag201822,
];

const MagazineModal = (props) => {
  return (
    <Modal {...props} size="lg" centered>
      <Modal.Header closeButton>
        <p
          style={{
            textAlign: 'center',
            width: '100%',
            fontFamily: 'Gill Sans',
            fontSize: '30px',
          }}
        >
          Feuilletez l'édition 2018 !{' '}
        </p>
      </Modal.Header>
      <Modal.Body>
        <Turn options={options} className="magazine">
          {pages2018.map((page, index) => (
            <div key={index} className="page">
              <img src={page} alt="" />
            </div>
          ))}
        </Turn>
        <Turn options={optionsTablet} className="magazine_tablet">
          {pages2018.map((page, index) => (
            <div key={index} className="page">
              <img src={page} alt="" />
            </div>
          ))}
        </Turn>
      </Modal.Body>
    </Modal>
  );
};

export default MagazineModal;
