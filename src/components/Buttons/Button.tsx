import styles from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  style?: string;
}

const Button: React.FC<ButtonProps> = ({ children, style }) => {
  return <button className={`${styles.btn} ${style}`}>{children}</button>;
};

export default Button;
