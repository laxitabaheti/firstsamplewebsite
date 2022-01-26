import { useState, Fragment } from "react";
import "./styles.css";
import MainHeader from "./components/MainHeader/MainHeader";
import LogIn from "./components/Login/Login";

export default function App() {
const [loginValid,setLoginValid]=useState(false)
  const LoginHandler=(em,pw)=>{
    console.log(em,pw)
    setLoginValid(true)
  }
  return (
    <Fragment>
      <MainHeader isAuthenticated={loginValid} />
      {!loginValid && <LogIn onLogin={LoginHandler}/>}
    </Fragment>
  );
}
