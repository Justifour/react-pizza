import {useDispatch} from "react-redux";
import {pizzaListCategoryIndexSet} from "../../store/actions";
import {PizzaListFilter} from "./PizzaListFilter";

const PizzaListFilters = ({categoryIndex, categoriesData}) => {
  const dispatch = useDispatch();

  const handleActiveIndex = (index) => {
    dispatch(pizzaListCategoryIndexSet(index));
  };

  const elements = categoriesData.map((name, i) => {
    return (
      <PizzaListFilter
        key={i}
        index={i}
        activeIndex={categoryIndex}
        onHandleActiveIndex={handleActiveIndex}
        name={name}
      />
    );
  });

  return (
    <div className="categories">
      <ul>{elements}</ul>
    </div>
  );
};

export {PizzaListFilters};
