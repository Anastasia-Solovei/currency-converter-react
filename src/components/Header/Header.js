import React from 'react';
import Logo from '../Logo';
import CurrencyRate from '../CurrencyRate';

import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.LogoOverlay}>
        <Logo />
        <h1 className={styles.AppHeading}>Currency Converter</h1>
      </div>

      <CurrencyRate />
    </header>
  );
}
