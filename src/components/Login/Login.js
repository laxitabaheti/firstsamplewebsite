import Card from "/src/components/UI/Card/Card.js";
import Button from "/src/components/UI/Button/Button.js";
import styles from "./Login.module.css";
import Wrapper from "/src/components/UI/Helpers/Wrapper.js";
import { useRef, useState } from "react";
import ErrorModal from "/src/components/UI/ErrorModal/ErrorModal";

const LogIn = (props) => {
  const InputemailRef = useRef();

  const InputpasswordRef = useRef();
  const [error, SetError] = useState(null);
  const errorHandler = () => {
    SetError(null);
  };

  const SubmitHandler = (event) => {
    event.preventDefault();
    const enteredUsername = InputemailRef.current.value;
    const enteredPassWord = InputpasswordRef.current.value;
    if (
      enteredUsername.trim().length === 0 ||
      enteredPassWord.trim().length === 0
    ) {
      SetError({
        title: "Wrong Username or password",
        message: "kindly enter valid username and password"
      });
      return;
    }
    if (enteredPassWord.trim().length < 7) {
      SetError({
        title: "Wrong  password",
        message: "kindly enter valid password (>7 letters)"
      });
      return;
    }
    console.log(enteredUsername, enteredPassWord);
    SetError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onErrorClick={errorHandler}
        />
      )}
      <Card className={styles.loginPortal}>
        <form onSubmit={SubmitHandler}>
          <div className={styles.email}>
            <label>E-Mail</label>
            <input ref={InputemailRef} type="text" />
          </div>
          <div className={styles.password}>
            <label>Password</label>
            <input ref={InputpasswordRef} type="password" />
          </div>
          <div className={styles.loginButton}>
            <Button type="submit" className={styles.Button}>
              Login
            </Button>
          </div>
        </form>
      </Card>
    </Wrapper>
  );
};
export default LogIn;
