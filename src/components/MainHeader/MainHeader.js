import Wrapper from "/src/components/UI/Helpers/Wrapper.js";

import styles from "./MainHeader.module.css";
const MainHeader = (props) => {
  return (
    <Wrapper>
      <header className={styles.header}>
        <h2>A Typical Page</h2>
      </header>
    </Wrapper>
  );
};
export default MainHeader;
