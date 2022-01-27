import Wrapper from "/src/components/UI/Helpers/Wrapper.js";
import Card from "/src/components/UI/Card/Card.js";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <Wrapper>
      <Card className={styles.Home}>
        <h2>Welcome Back!!!</h2>
      </Card>
    </Wrapper>
  );
};
export default Home;
