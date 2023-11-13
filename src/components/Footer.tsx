import logo from "../icons/logo.svg";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <a className={styles.logo} href="##">
        <img className={styles.logo__img} src={logo} alt="logo" />
      </a>
      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          <li className={styles.nav__item}>
            <a href="##" className={styles.nav__link}>
              АРЕНДА КОНСОЛЕЙ
            </a>
          </li>
          <li className={styles.nav__item}>
            <a href="##" className={styles.nav__link}>
              КОМАНДНЫЕ СОРЕВНОВАНИЯ
            </a>
          </li>
          <li className={styles.nav__item}>
            <a href="##" className={styles.nav__link}>
              АРЕНДА СЕРВЕРА
            </a>
          </li>
          <li className={styles.nav__item}>
            <a href="##" className={styles.nav__link}>
              СООБЩЕСТВО
            </a>
          </li>
          <li className={styles.nav__item}>
            <a href="##" className={styles.nav__link}>
              РАБОТАЙ И ИГРАЙ
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Footer;
