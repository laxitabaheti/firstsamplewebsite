import Styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${Styles.button}  ${props.className}`}
      type={props.type || "button"}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};
export default Button;
