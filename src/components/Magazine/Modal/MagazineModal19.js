import React from "react";
import $ from "jquery";
import "../turn";
import { Modal } from "react-bootstrap";

import mag20191 from "../../../assets/images/mag-2019/mag-2019-1.jpg";
import mag20192 from "../../../assets/images/mag-2019/mag-2019-2.jpg";
import mag20193 from "../../../assets/images/mag-2019/mag-2019-3.jpg";
import mag20194 from "../../../assets/images/mag-2019/mag-2019-4.jpg";
import mag20195 from "../../../assets/images/mag-2019/mag-2019-5.jpg";
import mag20196 from "../../../assets/images/mag-2019/mag-2019-6.jpg";
import mag20197 from "../../../assets/images/mag-2019/mag-2019-7.jpg";
import mag20198 from "../../../assets/images/mag-2019/mag-2019-8.jpg";
import mag20199 from "../../../assets/images/mag-2019/mag-2019-9.jpg";
import mag201910 from "../../../assets/images/mag-2019/mag-2019-10.jpg";
import mag201911 from "../../../assets/images/mag-2019/mag-2019-11.jpg";
import mag201912 from "../../../assets/images/mag-2019/mag-2019-12.jpg";
import mag201913 from "../../../assets/images/mag-2019/mag-2019-13.jpg";
import mag201914 from "../../../assets/images/mag-2019/mag-2019-14.jpg";
import mag201915 from "../../../assets/images/mag-2019/mag-2019-15.jpg";
import Turn from "../Turn/Turn.js";

const optionsDesktop = {
  width: 650,
  height: 450,
  // autoCenter: true,
  display: "double",
  acceleration: true,
  elevation: 50,
  gradients: !$.isTouch,
  when: {
    turned: function(e, page) {
      console.log("Current view: ", $(this).turn("view"));
    }
  }
};
const optionsTablet = {
  width: 450,
  height: 250,
  // autoCenter: true,
  display: "double",
  acceleration: true,
  elevation: 50,
  gradients: !$.isTouch,
  when: {
    turned: function(e, page) {
      console.log("Current view: ", $(this).turn("view"));
    }
  }
};

const pages2019 = [
  mag20191,
  mag20192,
  mag20193,
  mag20194,
  mag20195,
  mag20196,
  mag20197,
  mag20198,
  mag20199,
  mag201910,
  mag201911,
  mag201912,
  mag201913,
  mag201914,
  mag201915
];

const MagazineModal = props => {
  return (
    <Modal {...props} size="lg" centered>
      <Modal.Header closeButton>
        <p
          style={{
            textAlign: "center",
            width: "100%",
            fontFamily: "Gill Sans",
            fontSize: "30px"
          }}
        >
          Feuilletez l'édition 2019 !{" "}
        </p>
      </Modal.Header>
      <Modal.Body>
        <Turn options={optionsDesktop} className="magazine">
          {pages2019.map((page, index) => (
            <div key={index} className="page">
              <img src={page} alt="" />
            </div>
          ))}
        </Turn>
        <Turn options={optionsTablet} className="magazine_tablet">
          {pages2019.map((page, index) => (
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
