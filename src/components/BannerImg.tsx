import banner_1 from "../img/banner-1.png";
import banner_2 from "../img/banner-2.png";
import styles from "./BannerImg.module.scss";

const BannerImg = () => {
  return (
    <div className={styles.bannerImg}>
      <img src={banner_1} alt="img" className={styles.bannerImg__img_1} />
      <img src={banner_2} alt="img" className={styles.bannerImg__img_2} />
    </div>
  );
};

export default BannerImg;
