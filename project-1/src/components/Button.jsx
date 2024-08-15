import styles from "../styles/Button.module.css";

const Button = ({ icon, text }) => {
  return (
    <button className={styles.btn}>
      {icon}
      <span>{text}</span>
    </button>
  );
};

export default Button;
