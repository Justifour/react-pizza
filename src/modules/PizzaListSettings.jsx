import {Filters} from '../components/Filters';
import {Sorting} from '../components/Sorting';

const PizzaListSettings = () => {
  return (
    <div className="content__top">
      <Filters />
      <Sorting />
    </div>
  );
};

export default PizzaListSettings;
