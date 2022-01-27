import Card from "/src/components/UI/Card/Card.js";
import Button from "/src/components/UI/Button/Button.js";
import styles from "./Login.module.css";
import Wrapper from "/src/components/UI/Helpers/Wrapper.js";
import { useEffect, useState } from "react";
// import ErrorModal from "/src/components/UI/ErrorModal/ErrorModal";

const LogIn = (props) => {
  const [enteredemail, setEnteredEmail] = useState("");
  const [enteredpassword, setEnteredPassword] = useState("");
  // const [emailValid,SetemailValid]=useState(false)
  // const [passwordValid,SetpasswordValid]=useState(false)
  const [formValid, setformvalid] = useState(false);

  const inputemailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const inputpasswordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  useEffect(() => {
    setformvalid(
      enteredemail.includes("@") && enteredpassword.trim().length > 7
    );
  }, [enteredemail, enteredpassword]);

  const SubmitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredemail, enteredpassword);
  };

  return (
    <Wrapper>
      <Card className={styles.loginPortal}>
        <form onSubmit={SubmitHandler}>
          <div className={styles.email}>
            <label>E-Mail</label>
            <input
              value={enteredemail}
              onChange={inputemailChangeHandler}
              type="text"
            />
          </div>
          <div className={styles.password}>
            <label>Password</label>
            <input
              value={enteredpassword}
              onChange={inputpasswordChangeHandler}
              type="password"
            />
          </div>
          <div className={styles.loginButton}>
            <Button
              type="submit"
              className={styles.Button}
              disabled={!formValid}
            >
              Login
            </Button>
          </div>
        </form>
      </Card>
    </Wrapper>
  );
};
export default LogIn;
