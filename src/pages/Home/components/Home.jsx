import Header from "../../../modules/Header/components/Header";
import {PizzaList} from "../../../modules/PizzaList";
import Wrapper from "../../../modules/Wrapper/components/Wrapper";

const Home = () => {
  return (
    <Wrapper>
      <Header />
      <PizzaList />
    </Wrapper>
  );
};

export default Home;
