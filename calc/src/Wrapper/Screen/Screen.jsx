import styles from "./Screen.module.scss";

const Screen = ({ value }) => {
  return <div className={styles.screen}>{value}</div>;
};

export default Screen;
