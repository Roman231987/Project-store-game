import logo from "../icons/logo.svg";
import game_1 from "../icons/header-logo/game_1.png"
import game_2 from "../icons/header-logo/game_2.png"
import game_3 from "../icons/header-logo/game_3.png"
import game_4 from "../icons/header-logo/game_4.png"
import Button from "./Buttons/Button";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <a className={styles.logo} href="##">
        <img className={styles.logo__img} src={logo} alt="logo" />
      </a>
      <h4 className={styles.title_4}>ТВОЯ ИГРОВАЯ СТАНЦИЯ</h4>
      <h1 className={styles.title_1}>Погрузись в мир современных игр</h1>
      <Button style={styles.header__btn}>ВЫБРАТЬ ПРИСТАВКУ</Button>
      <div className={styles.header__line_text}>О нас</div>
      <div className={styles.header__img}>
        <img src={game_1} alt="logo-1" />
        <img src={game_2} alt="logo-2" />
        <img src={game_3} alt="logo-3" />
        <img src={game_4} alt="logo-4" />
      </div>
    </div>
  );
};

export default Header;
