import Button from "/src/components/UI/Button/Button.js";
import styles from "/src/components/MainHeader/Navigation.module.css";
const Navigation = (props) => {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.ul}>
        <li className={styles.li}>User</li>
        <li className={styles.li}>Admin</li>
        <li className={styles.li}>
          <Button className={styles.button}>Log out</Button>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
