// import Wrapper from "/src/components/UI/Helpers/Wrapper.js";
import Navigation from "/src/components/MainHeader/Navigation.js";
import styles from "./MainHeader.module.css";
const MainHeader = (props) => {
  return (
    <header className={styles.header}>
      <h2>NAME OF THE APPLICATION</h2>
      <Navigation />
    </header>
  );
};
export default MainHeader;
