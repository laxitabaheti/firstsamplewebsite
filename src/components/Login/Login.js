import Card from "/src/components/UI/Card/Card.js";
import AuthContext from "/src/components/Store/AuthContext";
import Button from "/src/components/UI/Button/Button.js";
import styles from "./Login.module.css";
import Wrapper from "/src/components/UI/Helpers/Wrapper.js";

import { useEffect, useReducer, useState, useContext } from "react";

const EmailReducer = (state, action) => {
  if (action.type === "EMAIL_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  // if (action.type === "") {
  //   return { value: state.value, isValid: state.value.includes("@") };
  // }
  return { value: "", isValid: false };
};
const PasswordReducer = (state, action) => {
  if (action.type === "PASSWORD_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 7 };
  }
  // if (action.type === "") {
  //   return { value: state.value, isValid: state.value.includes("@") };
  // }
  return { value: "", isValid: false };
};
const LogIn = (props) => {
  // const [enteredemail, setEnteredEmail] = useState("");
  // const [enteredpassword, setEnteredPassword] = useState("");
  // const [emailValid,SetemailValid]=useState(false)
  // const [passwordValid,SetpasswordValid]=useState(false)
  const [formValid, setformvalid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(EmailReducer, {
    value: "",
    isValid: null
  });

  const [passwordState, dispatchPassword] = useReducer(PasswordReducer, {
    value: "",
    isValid: null
  });

  const inputemailChangeHandler = (event) => {
    dispatchEmail({ type: "EMAIL_INPUT", val: event.target.value });
  };

  const inputpasswordChangeHandler = (event) => {
    dispatchPassword({ type: "PASSWORD_INPUT", val: event.target.value });
  };
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      setformvalid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);
  const ctx = useContext(AuthContext);

  const SubmitHandler = (event) => {
    event.preventDefault();
    ctx.onLogin(emailState.value, passwordState.value);
    // emailState.value = "";
    // passwordState.value = "";
  };

  return (
    <Wrapper>
      <Card className={styles.loginPortal}>
        <form onSubmit={SubmitHandler}>
          <div className={styles.email}>
            <label>E-Mail</label>
            <input
              value={emailState.value}
              onChange={inputemailChangeHandler}
              type="text"
            />
          </div>
          <div className={styles.password}>
            <label>Password</label>
            <input
              value={passwordState.value}
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
