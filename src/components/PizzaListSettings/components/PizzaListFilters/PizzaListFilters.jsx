import {useDispatch} from "react-redux";
import {pizzaListActiveCategoryIndexSet} from "../../store/actions";
import {PizzaListFilter} from "./PizzaListFilter";

const PizzaListFilters = ({data, activeIndex}) => {
  const dispatch = useDispatch();

  const handleActiveIndex = (index) => {
    dispatch(pizzaListActiveCategoryIndexSet(index));
  };
  
  const ui = data.map((name, i) => {
    return <PizzaListFilter key={i} name={name} index={i} activeIndex={activeIndex} handleClick={handleActiveIndex} />;
  });

  return (
    <div className="categories">
      <ul>{ui}</ul>
    </div>
  );
};

export {PizzaListFilters};
