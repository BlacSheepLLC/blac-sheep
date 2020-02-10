import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import styles from './index.module.css';

console.log(styles);

const IndexPage = () => (
  <Layout>
    <SEO title="Development Studio" />

    <header className={`${styles.container} ${styles.oHeroHeader}`}>
      <h1 className={`${styles.oHeroTitle}`}>
        We&apos;re a web and mobile app development studio
      </h1>
      <p className={`${styles.oHeroLead}`}>
        We design and develop the next generation of digital products by
        partnering with startups as their remote in-house development team.
      </p>

      <a href="#contact" className={`${styles.oHeroCta} o-interactive-cta`}>
        Curious yet?
      </a>
    </header>
  </Layout>
);

export default IndexPage;
