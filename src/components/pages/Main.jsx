import Pizzas from '../pizzas/Pizzas';
import Filters from '../pizzas/Filters';
import Sorting from '../pizzas/Sorting';

const Main = () => {
  return (
    <>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Filters />
            <Sorting />
          </div>
        </div>
      </div>
      <Pizzas />
    </>
  );
};

export default Main;
