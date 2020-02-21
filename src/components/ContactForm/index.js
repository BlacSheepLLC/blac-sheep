import React from 'react';

import styles from './index.module.css';

const ContactForm = () => (
  <form name="contact" method="POST" data-netlify="true" className={styles.container}>
    <fieldset>
      <legend className={`${styles.legend} o-brand-subtitle`}>Let&apos;s talk</legend>
      <p className={styles.instructions}>Drop us a line, tell us a bit about who you are and what you do</p>

      <label htmlFor="name" className={styles.field}>
        <span>Name *</span>
        <input type="text" name="name" placeholder="Your cool name here" id="name" required />
      </label>

      <label htmlFor="email" className={styles.field}>
        <span>Email *</span>
        <input type="email" name="email" placeholder="Where can we reach you" id="email" required />
      </label>

      <label htmlFor="company" className={styles.field}>
        <span>Company</span>
        <input type="text" name="company" placeholder="Where you work" id="company" />
      </label>

      <label htmlFor="biz" className={styles.field}>
        <span>On which service are you intrested?</span>
        <select name="biz" id="biz">
          <option value="web">Web</option>
          <option value="mobile">Mobile</option>
          <option value="fullstack">Web & Mobile</option>
          <option value="uncertain">I&apos;m not sure</option>
        </select>
      </label>
    </fieldset>

    <label htmlFor="concept" className={styles.field}>
      <span>What do you want to do? *</span>
      <textarea
        name="concept"
        id="concept"
        placeholder="What's the gig? What's the deadline? How unbearably cool is it?"
        required
      />
    </label>

    <button type="button" className={`${styles.submit} o-interactive-cta`}>
      Send Message
    </button>
  </form>
);

export default ContactForm;
