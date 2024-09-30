import styles from "./Wrapper.module.scss";
import Screen from "./Screen/Screen";

const Wrapper = () => {
  return (
    <div className={styles.wrapper}>
      <Screen></Screen>
    </div>
  );
};

export default Wrapper;
