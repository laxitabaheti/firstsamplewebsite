import { Fragment } from "react";
import "./styles.css";
import MainHeader from "./components/MainHeader/MainHeader";
import LogIn from "./components/Login/Login";

export default function App() {
  return (
    <Fragment>
      <MainHeader />
      <LogIn />
    </Fragment>
  );
}
