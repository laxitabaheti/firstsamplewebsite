import { useState, useEffect, Fragment } from "react";
import "./styles.css";
import MainHeader from "./components/MainHeader/MainHeader";
import LogIn from "./components/Login/Login";
import Home from "./components/Home/Home";

export default function App() {
  const [loginValid, setLoginValid] = useState(false);

  const LoginHandler = (em, pw) => {
    localStorage.setItem("isLoggedIn", "1");
    setLoginValid(true);
  };

  useEffect(() => {
    const storeduserLoggedInInfo = localStorage.getItem("isLoggedIn");
    if (storeduserLoggedInInfo === "1") {
      setLoginValid(true);
    }
  }, []);

  const Logouthandler = () => {
    setLoginValid(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <Fragment>
      <MainHeader isAuthenticated={loginValid} onLogOut={Logouthandler} />
      <main>
        {!loginValid && <LogIn onLogin={LoginHandler} />}
        {loginValid && <Home />}
      </main>
    </Fragment>
  );
}
