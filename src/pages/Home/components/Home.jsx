import {Header} from "../../../modules/Header";
import {PizzaList} from "../../../modules/PizzaList";
import {Wrapper} from "../../../modules/Wrapper";

const Home = () => {
  return (
    <Wrapper>
      <Header />
      <PizzaList />
    </Wrapper>
  );
};

export {Home};
