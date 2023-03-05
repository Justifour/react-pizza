import Header from '../../modules/Header';
import {PizzaList} from '../../modules/PizzaList';
import PizzaListSettings from '../../modules/PizzaListSettings';
import Wrapper from '../../modules/Wrapper';

const Home = () => {
  return (
    <Wrapper>
      <Header />
      <div className="content">
        <div className="container">
          <PizzaListSettings />
        </div>
      </div>
      <PizzaList />
    </Wrapper>
  );
};

export default Home;
