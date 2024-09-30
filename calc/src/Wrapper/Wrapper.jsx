import styles from "./Wrapper.module.scss";
import Screen from "./Screen/Screen";
import ButtonBox from "../ButtonBox/ButtonBox";

const Wrapper = () => {
  return (
    <div className={styles.wrapper}>
      <Screen value="6"></Screen>
      <ButtonBox></ButtonBox>
    </div>
  );
};

export default Wrapper;
