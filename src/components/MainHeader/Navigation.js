import Button from "/src/components/UI/Button/Button.js";
import styles from "/src/components/MainHeader/Navigation.module.css";
import { useContext } from "react";
import AuthContext from "../Store/AuthContext";

const Navigation = (props) => {
  const ctx = useContext(AuthContext);

  return (
    <nav className={styles.navBar}>
      <ul className={styles.ul}>
        {ctx.isLoggedin && <li className={styles.li}>User</li>}

        {ctx.isLoggedin && <li className={styles.li}>Admin</li>}

        {ctx.isLoggedin && (
          <li className={styles.li}>
            <Button onClick={ctx.isLoggedout} className={styles.button}>
              Log out
            </Button>
          </li>
        )}
      </ul>
    </nav>
  );
};
export default Navigation;
