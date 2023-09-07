import styles from "./BannerText.module.scss";
import Button from "./Buttons/Button";

const BannerText = () => {
  return (
    <div className={styles.bannerText}>
      <h4 className={styles.title_4}>ВЕДИ КОМАНДУ К ПОБЕДЕ</h4>
      <div className="margin-bottom-30px">
        <h2 className={styles.title_2}>Лучшее место для онлайн соревнований</h2>
      </div>
      <p className={styles.text}>
        Как уже неоднократно упомянуто, базовые сценарии поведения пользователей
        освещают чрезвычайно интересные особенности картины.
      </p>
      <Button>СОЗДАТЬ КОМАНДУ</Button>
    </div>
  );
};

export default BannerText;
