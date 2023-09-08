import * as images from "../img/images";
import styles from "./Gallery.module.scss";

const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <div className={`${styles.gallery__item} ${styles.gallery__item_1}`}>
        <img
          className={styles.gallery__img}
          src={images.gallery_image_1}
          alt="img-1"
        />
      </div>
      <div className={`${styles.gallery__item} ${styles.gallery__item_2}`}>
        <img
          className={styles.gallery__img}
          src={images.gallery_image_2}
          alt="img-2"
        />
      </div>
      <div className={`${styles.gallery__item} ${styles.gallery__item_3}`}>
        <img
          className={styles.gallery__img}
          src={images.gallery_image_3}
          alt="img-3"
        />
      </div>

      <div className={`${styles.gallery__item} ${styles.gallery__item_4}`}>
        <img
          className={styles.gallery__img}
          src={images.gallery_image_4}
          alt="img-4"
        />
      </div>
      <div className={`${styles.gallery__item} ${styles.gallery__item_5}`}>
        <img
          className={styles.gallery__img}
          src={images.gallery_image_5}
          alt="img-5"
        />
      </div>
      <div className={`${styles.gallery__item} ${styles.gallery__item_6}`}>
        <img
          className={styles.gallery__img}
          src={images.gallery_image_6}
          alt="img-6"
        />
      </div>
      <div className={`${styles.gallery__item} ${styles.gallery__item_7}`}>
        <img
          className={styles.gallery__img}
          src={images.gallery_image_7}
          alt="img-7"
        />
      </div>
      <div className={`${styles.gallery__item} ${styles.gallery__item_8}`}>
        <img
          className={styles.gallery__img}
          src={images.gallery_image_8}
          alt="img-8"
        />
      </div>
      <div className={`${styles.gallery__item} ${styles.gallery__item_9}`}>
        <img
          className={styles.gallery__img}
          src={images.gallery_image_9}
          alt="img-9"
        />
      </div>
      <div className={`${styles.gallery__item} ${styles.gallery__item_10}`}>
        <img
          className={styles.gallery__img}
          src={images.gallery_image_10}
          alt="img-10"
        />
      </div>
      <div className={`${styles.gallery__item} ${styles.gallery__item_11}`}>
        <img
          className={styles.gallery__img}
          src={images.gallery_image_11}
          alt="img-11"
        />
      </div>
      <div className={`${styles.gallery__item} ${styles.gallery__item_12}`}>
        <img
          className={styles.gallery__img}
          src={images.gallery_image_12}
          alt="img-12"
        />
      </div>
      <div className={`${styles.gallery__item} ${styles.gallery__item_13}`}>
        <img
          className={styles.gallery__img}
          src={images.gallery_image_13}
          alt="img-13"
        />
      </div>
      <div className={`${styles.gallery__item} ${styles.gallery__item_14}`}>
        <img
          className={styles.gallery__img}
          src={images.gallery_image_14}
          alt="img-14"
        />
      </div>
    </div>
  );
};

export default Gallery;
