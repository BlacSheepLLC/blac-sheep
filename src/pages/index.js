import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import DojourLogoImage from '../components/Image/DojourLogoImage';
import VitalsLogoImage from '../components/Image/VitalsLogoImage';
import TSLettersLogoImage from '../components/Image/TSLettersLogoImage';

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

      <section className={`${styles.container} ${styles.processSection}`}>
        <span className={`${styles.subtitle}`}>How we roll</span>
        <h2 className={`${styles.title}`}>
          We don&apos;t just type code, deliver and call it a day, we work closely with our partners over the course of
          our relationship
        </h2>

        <p>
          We take a different approach than typical app development shops, we don&apos;t think of ourselves as sales
          people but rather as business partners. Think of us as your in-house development team that:
        </p>

        <ul className={styles.processOverview}>
          <li>
            — Is 100% remote (&nbsp;
            <span role="img" aria-label="USA flag">
              🇺🇸
            </span>
            &nbsp;USA · &nbsp;
            <span role="img" aria-label="Mexico flag">
              🇲🇽
            </span>
            &nbsp;Mexico&nbsp;)
          </li>
          <li>— Is passionate about creating amazing products that add value to people&apos;s lifes</li>
          <li>— Values accessibility, privacy and performance</li>
          <li>— Works on a feature-based cycle, from idea to production </li>
          <li>— Shares the startup mindset, understanding the importance of team effort and the challenges ahead</li>
        </ul>
      </section>

      <section className={`${styles.container} ${styles.partnersSection}`}>
        <span className={styles.subtitle}>Our partners</span>
        <h2 className={styles.title}>We love working with startups, building the tools of tomorrow</h2>

        <ul className={styles.partnersLogos}>
          <li>
            <DojourLogoImage />
          </li>
          <li>
            <TSLettersLogoImage />
          </li>
          <li>
            <VitalsLogoImage />
          </li>
        </ul>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
