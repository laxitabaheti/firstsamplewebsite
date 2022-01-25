import Card from "/src/components/UI/Card/Card.js";
import Button from "/src/components/UI/Button/Button.js";
import styles from "./ErrorModal.module.css";
const ErrorModal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} />
      <Card className={styles.ErrorModal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.footer}>
          <Button className={styles.button} onClick={props.onErrorClick}>
            okay!
          </Button>
        </footer>
      </Card>
    </div>
  );
};
export default ErrorModal;
