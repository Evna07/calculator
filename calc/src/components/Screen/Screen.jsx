import styles from "./Screen.module.scss";

const Screen = ({ value }) => {
  return (
    <div className={styles.screen} data-cy="screen">
      {value}
    </div>
  );
};

export default Screen;
