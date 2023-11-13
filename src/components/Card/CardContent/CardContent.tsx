import styles from "./CardContent.module.scss";

interface CardContentProps {
  children: React.ReactNode;
  icon: string;
}

const CardContent: React.FC<CardContentProps> = ({ icon, children }) => {
  return (
    <div className={`${styles.content} ${styles.card__location}`}>
      <img className={styles.card__svg} src={icon} alt="icon" />
      <p>{children}</p>
    </div>
  );
};

export default CardContent;
