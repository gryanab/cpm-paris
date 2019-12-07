import React from 'react';
import Layout from '../../../hoc/Layout/Layout';

import './Form.css';

const form = () => (
  <Layout>
    <div class="formulaire">
      <div id="contact">Contact</div>
      <div id="nos-bureaux">
        <h2> NOS BUREAUX</h2>
        <p class="parag-contact">Centre d'affaires Ports de Paris</p>
        <p class="parag-contact">CPM 440 Clos de la Courtine</p>
        <p class="parag-contact">93160 Noisy le Grand</p>
      </div>
      <div id="contactez-nous">
        <h2> CONTACTEZ NOUS</h2>
        <p class="parag-contact">01 82 37 09 70</p>
        <p class="parag-contact">contact@cpmparis.fr</p>
      </div>
      <form
        className="form"
        id="fs-frm"
        name="department-contact-form"
        accept-charset="utf-8"
        action="https://formspree.io/gryan.ab@gmail.com"
        method="post"
      >
        <fieldset id="fs-frm-inputs">
          <input
            type="text"
            name="Nom"
            id="last-name"
            placeholder="Nom"
            required
          />
          <input
            type="text"
            name="Prénom"
            id="first-name"
            placeholder="Prénom"
            required
          />
          <input
            type="text"
            name="Société"
            id="company"
            placeholder="Société"
            required
          />
          <input
            type="email"
            name="_replyto"
            id="email-address"
            placeholder="Email"
            required
          />
          <input
            type="text"
            name="Téléphone"
            id="phone"
            placeholder="Téléphone"
            required
          />
          <input
            type="text"
            name="Sujet"
            id="subject"
            placeholder="Sujet"
            required
          />
          <textarea
            rows="5"
            name="Message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
          <input
            type="hidden"
            name="_subject"
            id="email-subject"
            value="Department Contact Form Submission"
          />
          <input id="submit" type="submit" value="Envoyer" />
        </fieldset>
      </form>
    </div>
  </Layout>
);

export default form;