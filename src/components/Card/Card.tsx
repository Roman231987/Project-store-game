import location from "../../icons/cards/1_location.svg";
import users from "../../icons/cards/2_users.svg";
import Vector from "../../icons/cards/3_Vector.svg";
import display from "../../icons/cards/4_display.svg";
import CardContent from "./CardContent/CardContent";
import styles from "./Card.module.scss";
import Button from "../Buttons/Button";

interface CardProps {
  children?: React.ReactNode;
  image: string;
}

const Card: React.FC<CardProps> = ({ image, children }) => {
  return (
    <div className={styles.card}>
      <img className={styles.card__img} src={image} alt="img" />
      <h5 className={styles.card__title}>{children}</h5>
      <CardContent icon={location}>{"EUR"}</CardContent>
      <CardContent icon={users}>{"20+ players"}</CardContent>
      <CardContent icon={Vector}>{"от 100руб"}</CardContent>
      <CardContent icon={display}>{"4к монитор"}</CardContent>
      <Button style={styles.card__btm}>ВЫБРАТЬ ПЛАТФОРМУ</Button>
    </div>
  );
};

export default Card;
