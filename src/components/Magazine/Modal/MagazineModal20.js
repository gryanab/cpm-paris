import React from 'react';
import $ from 'jquery';
import '../turn';
import { Modal } from 'react-bootstrap';

import mag20201 from '../../../assets/images/mag-2020/mag-2020-1.jpg';
import mag20202 from '../../../assets/images/mag-2020/mag-2020-2.jpg';
import mag20203 from '../../../assets/images/mag-2020/mag-2020-3.jpg';
import mag20204 from '../../../assets/images/mag-2020/mag-2020-4.jpg';
import mag20205 from '../../../assets/images/mag-2020/mag-2020-5.jpg';
import mag20206 from '../../../assets/images/mag-2020/mag-2020-6.jpg';
import mag20207 from '../../../assets/images/mag-2020/mag-2020-7.jpg';
import mag20208 from '../../../assets/images/mag-2020/mag-2020-8.jpg';
import mag20209 from '../../../assets/images/mag-2020/mag-2020-9.jpg';
import mag202010 from '../../../assets/images/mag-2020/mag-2020-10.jpg';
import mag202011 from '../../../assets/images/mag-2020/mag-2020-11.jpg';
import mag202012 from '../../../assets/images/mag-2020/mag-2020-12.jpg';
import mag202013 from '../../../assets/images/mag-2020/mag-2020-13.jpg';
import Turn from '../Turn/Turn.js';

const optionsDesktop = {
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

const pages2020 = [
  mag20201,
  mag20202,
  mag20203,
  mag20204,
  mag20205,
  mag20206,
  mag20207,
  mag20208,
  mag20209,
  mag202010,
  mag202011,
  mag202012,
  mag202013,
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
          Feuilletez l'édition 2020 !{' '}
        </p>
      </Modal.Header>
      <Modal.Body>
        <Turn options={optionsDesktop} className="magazine">
          {pages2020.map((page, index) => (
            <div key={index} className="page">
              <img src={page} alt="" />
            </div>
          ))}
        </Turn>
        <Turn options={optionsTablet} className="magazine_tablet">
          {pages2020.map((page, index) => (
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
