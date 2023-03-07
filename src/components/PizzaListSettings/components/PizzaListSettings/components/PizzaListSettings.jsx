import {PizzaListFilters} from "../../PizzaListFilters";
import {PizzaListSorting} from "../../PizzaListSorting";

const PizzaListSettings = () => {
  return (
    <div className="content__top">
      <PizzaListFilters />
      <PizzaListSorting />
    </div>
  );
};

export default PizzaListSettings;
