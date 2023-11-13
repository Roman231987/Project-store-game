import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <button className={styles.hamburger}></button>
    </div>
  );
};

export default Sidebar;
