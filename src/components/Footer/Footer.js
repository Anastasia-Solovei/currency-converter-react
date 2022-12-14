import styles from './Footer.module.css';
import sprite from '../../images/svg_sprite.svg';

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Copyright}>
        <svg className={styles.CopyrightIcon} width="15" height="15">
          <use href={sprite + '#icon-copyright'}></use>
        </svg>
        <p className={styles.CopyrightText}>All rights reserved</p>
      </div>

      <span>|</span>

      <a
        className={styles.Contact}
        href="https://www.linkedin.com/in/solovei-anastasiia/"
      >
        <svg className={styles.ContactIcon} width="14" height="14">
          <use href={sprite + '#icon-linkedin'}></use>
        </svg>
        <p className={styles.ContactText}>Anastasiia Solovei</p>
      </a>
    </footer>
  );
}
