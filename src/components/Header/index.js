import React from 'react';
import { Link } from 'gatsby';

import EmblemLogoImage from '../Image/EmblemLogoImage';

import styles from './index.module.css';

const Header = () => (
  <nav className={`${styles.container}`}>
    <Link to="/" className="o-brand-logo">
      <div className="o-brand-emblem">
        <EmblemLogoImage />
      </div>

      <span className="o-brand-wordmark">
        Blac-
        <br />
        Sheep
      </span>
    </Link>

    <ul className={`${styles.links}`} />
  </nav>
);

export default Header;
