import image_1 from "../img/cards/image_1.png";
import image_2 from "../img/cards/image_2.png";
import image_3 from "../img/cards/image_3.png";
import image_4 from "../img/cards/image_4.png";
import image_5 from "../img/cards/image_5.png";
import image_6 from "../img/cards/image_6.png";
import Card from "./Card/Card";
import styles from "./Cards.module.scss";

const Cards = () => {
  return (
    <div className={styles.cards}>
      <Card image={image_1}>PC</Card>
      <Card image={image_2}>Play Station</Card>
      <Card image={image_3}>X-BOX</Card>
      <Card image={image_4}>Nintendo</Card>
      <Card image={image_5}>Steam deck</Card>
      <Card image={image_6}>Mobile</Card>
    </div>
  );
};

export default Cards;
