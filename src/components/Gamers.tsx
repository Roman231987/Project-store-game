import gamer_1 from "../img/gamers/gamer_1.png";
import gamer_2 from "../img/gamers/gamer_2.png";
import gamer_3 from "../img/gamers/gamer_3.png";
import styles from "./Gamers.module.scss";

const Gamers = () => {
  return (
    <div className={styles.gamers}>
      <div
        className={`${styles.title_3} ${styles.title_3__green_light} ${styles.gamers_title}`}
      >
        TOP 3 PLAYERS
      </div>

      <div className={styles.gamers_box}>
        <img className={styles.gamers_img} src={gamer_1} alt="фото гравця" />
        <div className={styles.gamers_text}>
          <div className={`${styles.title_3} ${styles.title_3__white}`}>
            Лиза Фролова
          </div>
          <p className={styles.gamers_score}>score 2953</p>
        </div>
      </div>

      <div className={styles.gamers_box}>
        <img className={styles.gamers_img} src={gamer_2} alt="фото гравця" />
        <div className={styles.gamers_text}>
          <div className={`${styles.title_3} ${styles.title_3__white}`}>
            Андрей Степанов
          </div>
          <p className={styles.gamers_score}>score 2953</p>
        </div>
      </div>

      <div className={styles.gamers_box}>
        <img className={styles.gamers_img} src={gamer_3} alt="фото гравця" />
        <div className={styles.gamers_text}>
          <div className={`${styles.title_3} ${styles.title_3__white}`}>
            Иван Савельев
          </div>
          <p className={styles.gamers_score}>score 2953</p>
        </div>
      </div>
    </div>
  );
};

export default Gamers;
