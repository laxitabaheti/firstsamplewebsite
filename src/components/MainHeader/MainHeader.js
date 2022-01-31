import Navigation from "/src/components/MainHeader/Navigation.js";
import styles from "./MainHeader.module.css";
const MainHeader = (props) => {
  return (
    <header className={styles.header}>
      <h2>APPLICATION</h2>
      <Navigation />
    </header>
  );
};
export default MainHeader;
