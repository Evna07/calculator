import styles from "./ButtonBox.module.scss";

const ButtonBox = ({ children }) => {
  return <div className={styles.buttonBox}>{children}</div>;
};

export default ButtonBox;
