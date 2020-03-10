import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import DojourLogoImage from '../components/Image/DojourLogoImage';
import VitalsLogoImage from '../components/Image/VitalsLogoImage';
import TSLettersLogoImage from '../components/Image/TSLettersLogoImage';
import ContactForm from '../components/ContactForm';
import FeatherIcon from '../components/FeatherIcon';

import styles from './index.module.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Development Studio" />

    <div className={styles.home}>
      <header className={`${styles.container} ${styles.heroHeader}`}>
        <h1 className={`${styles.heroTitle}`}>We are a web and mobile app development studio</h1>
        <p className={`${styles.heroLead}`}>
          We partner with startups as a remote in-house product development team — providing the management, design and
          development workforce to meet your goals
        </p>

        <a href="#contact" className={`${styles.heroCta} o-interactive-cta`}>
          Curious yet?
        </a>
      </header>

      <section className={`${styles.container} ${styles.servicesSection}`}>
        <span className="o-brand-subtitle">Our services</span>
        <h2 className="o-brand-title">
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
        <span className="o-brand-subtitle">How we roll</span>
        <h2 className="o-brand-title">
          We don&apos;t just type code, deliver and call it a day, we work closely with our partners over the course of
          our relationship
        </h2>

        <p>
          Blac-Sheep is a fully remote company working across&nbsp;
          <span role="img" aria-label="Mexico flag">
            🇲🇽
          </span>
          &nbsp;&nbsp;Mexico and the&nbsp;
          <span role="img" aria-label="USA flag">
            🇺🇸
          </span>
          &nbsp;US. We love working on challenging and awesome projects, we&apos;re inspired by the startup mindset and
          energy that comes with building something revolutionary.
        </p>

        <br />

        <p>
          We don&apos;t think of ourselves as sales people but rather as business partners. No one knows your biz better
          than you, but we do know how to build killer products that people engage with. We believe that by getting to
          know each other and collaborating each other&apos;s strengths we can build something incredible.
        </p>

        <br />
      </section>

      <section className={`${styles.container} ${styles.partnersSection}`}>
        <span className="o-brand-subtitle">Our partners</span>
        <h2 className="o-brand-title">We love working with startups, building the tools of tomorrow</h2>

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

      <section className={`${styles.container} ${styles.motivationSection}`}>
        <div className={styles.motivationSectionHeader}>
          <span className="o-brand-subtitle">It&apos;s a win-win</span>
          <h2 className="o-brand-title">
            Working on pijamas, from a coffeeshop and our pets all over our keyboards it&apos;s a lifestyle, but remote
            means so much more for us
          </h2>
        </div>

        <div className={styles.motivationSectionContent}>
          <p>
            Being
            <em> proudly </em>
            Mexican-American founded we saw an opportunity we couldn&apos;t ignore, we had the chance to bring the
            <b> best of our countries together </b>
            through hard work and collaboration.
          </p>

          <br />

          <p>
            We wanted
            <strong> diversity and inclusion </strong>
            right at the core of our values. We wanted to open the doors to the talented developers that don&apos;t have
            the means or the priviledge to develop their careers abroad and at their full potential.
          </p>

          <br />

          <p>
            Working remotely has allowed us to onboard
            <strong> amazing talented developers </strong>
            no matter where they are and place them right into the development battlefield with exciting and
            cutting-edge startups. We are all eager to show what we can do together.
          </p>
        </div>
      </section>

      <section className={styles.contactSection} id="contact">
        <div className={styles.contactSectionForm}>
          <ContactForm />
        </div>

        <div className={styles.contactSectionDetails}>
          <span className="o-brand-subtitle">Get in touch</span>
          <h2 className="o-brand-title">
            We&apos;re super chill and casual folks, we&apos;d love to meet over coffee but y&apos;know... remote
          </h2>

          <div className={styles.contactSectionLinks}>
            <span>Call us at</span>
            <a className={`${styles.contactLink} o-interactive-link`} href="tel:6123242096" title="Call Blac-Sheep">
              (612) 324-2096
            </a>

            <span>Send us an email to</span>
            <a
              className={`${styles.contactLink} o-interactive-link`}
              href="mailto:hello@blac-sheep.com"
              title="Write email to Blac-Sheep"
            >
              hello@blac-sheep.com
            </a>
          </div>

          <div className={styles.contactSectionSocials}>
            <span>Follow our journey —</span>
            <a href="https://twitter.com/blacsheepllc" className={styles.socialLink} title="Visit Blac-Sheep's Twitter">
              <FeatherIcon name="twitter" size={30} />
            </a>

            <a
              href="https://instagram.com/blacsheepllc/"
              className={styles.socialLink}
              title="Visit Blac-Sheep's Instagram"
            >
              <FeatherIcon name="instagram" size={30} />
            </a>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
