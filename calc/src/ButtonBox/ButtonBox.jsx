import styles from "./ButtonBox.module.scss";
import Button from "./Button/Button";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

const ButtonBox = () => {
  return (
    <div className={styles.buttonBox}>
      {btnValues.flat().map((btn, i) => {
        return (
          <Button
            key={i}
            className={btn === "=" ? "equals" : "actionButton"}
            value={btn}
            onClick={() => {
              console.log(`${btn} clicked!`);
            }}
          />
        );
      })}
    </div>
  );
};

export default ButtonBox;
