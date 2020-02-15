import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import styles from './index.module.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Development Studio" />

    <div className={styles.home}>
      <header className={`${styles.container} ${styles.heroHeader}`}>
        <h1 className={`${styles.heroTitle}`}>We&apos;re a web and mobile app development studio</h1>
        <p className={`${styles.heroLead}`}>
          We partner with startups as a remote in-house product development team — providing the management, design and
          development workforce to meet your goals
        </p>

        <a href="#contact" className={`${styles.heroCta} o-interactive-cta`}>
          Curious yet?
        </a>
      </header>

      <section className={`${styles.container} ${styles.servicesSection}`}>
        <span className={`${styles.subtitle}`}>Our services</span>
        <h2 className={`${styles.title}`}>
          We play the long run by delivering high-quality, user-fiendly products that people love to use
        </h2>

        <dl className={`${styles.serviceList}`}>
          <dt>Web</dt>
          <dd>
            Be it a marketing site, a blog, an e-commerce platform or a full-blown web application we&apos;ll ensure
            your site or application runs smoothly across browsers, screen sizes and even device types
          </dd>
          <dd>UI / UX design · Prototyping · Frontend · Backend</dd>

          <dt>Mobile apps</dt>
          <dd>
            iOS & Android — hate one or the other, love them both. We tailor each platform&apos;s uniqueness to deliver
            a fast, responsive and unified cross-platform experience for your app
          </dd>
          <dd>UI / UX design · Prototyping · iOS · Android · Hybrid apps · Backend</dd>
        </dl>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
