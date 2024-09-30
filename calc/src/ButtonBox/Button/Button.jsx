import styles from "./Button.module.scss";

const Button = ({ className = "", value, onClick }) => {
  return (
    <button className={styles[className]} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
