import icon_steam2 from "../icons/steam2.svg";
import earth from "../icons/earth.svg";
import bubbles2 from "../icons/bubbles2.svg";
import Vector_1 from "../icons/Vector-1.svg";
import Vector_2 from "../icons/Vector-2.svg";
import Vector from "../icons/Vector.svg";
import styles from "./Features.module.scss";

const Features = () => {
  return (
    <div className={styles.features}>
      <div className={styles.feature}>
        <img
          className={styles.feature__icon}
          src={icon_steam2}
          alt="icon_features"
        />
        <div className={styles.feature__title_3}>Лучшая игровая плаформа</div>
        <p className={styles.feature__text}>
          Как уже неоднократно упомянуто, базовые сценарии поведения
          пользователей освещают чрезвычайно интересные особенности картины.
        </p>
      </div>

      <div className={styles.feature}>
        <img
          className={styles.feature__icon}
          src={Vector_2}
          alt="icon_features"
        />
        <div className={styles.feature__title_3}>Еженедельные турниры</div>
        <p className={styles.feature__text}>
          Как уже неоднократно упомянуто, базовые сценарии поведения
          пользователей освещают чрезвычайно интересные особенности картины.
        </p>
      </div>
      <div className={styles.feature}>
        <img
          className={styles.feature__icon}
          src={Vector_1}
          alt="icon_features"
        />
        <div className={styles.feature__title_3}>Онлайн общение</div>
        <p className={styles.feature__text}>
          Как уже неоднократно упомянуто, базовые сценарии поведения
          пользователей освещают чрезвычайно интересные особенности картины.
        </p>
      </div>
      <div className={styles.feature}>
        <img className={styles.feature__icon} src={earth} alt="icon_features" />
        <div className={styles.feature__title_3}>Сообщество во всем мире</div>
        <p className={styles.feature__text}>
          Как уже неоднократно упомянуто, базовые сценарии поведения
          пользователей освещают чрезвычайно интересные особенности картины.
        </p>
      </div>
      <div className={styles.feature}>
        <img
          className={styles.feature__icon}
          src={bubbles2}
          alt="icon_features"
        />
        <div className={styles.feature__title_3}>Онлайн чат с поддержкой</div>
        <p className={styles.feature__text}>
          Как уже неоднократно упомянуто, базовые сценарии поведения
          пользователей освещают чрезвычайно интересные особенности картины.
        </p>
      </div>
      <div className={styles.feature}>
        <img
          className={styles.feature__icon}
          src={Vector}
          alt="icon_features"
        />
        <div className={styles.feature__title_3}>Удобная система оплаты</div>
        <p className={styles.feature__text}>
          Как уже неоднократно упомянуто, базовые сценарии поведения
          пользователей освещают чрезвычайно интересные особенности картины.
        </p>
      </div>
    </div>
  );
};

export default Features;
