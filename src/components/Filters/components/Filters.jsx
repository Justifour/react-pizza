import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {pizzaListCategoryIndexSet, pizzaListLoaded} from "../actions/actions";
import Filter from "./Filter";

const Filters = () => {
  const sortingData = [
    {name: "умолчанию", selector: ""},
    {name: "популярности", selector: "rating"},
    {name: "цене", selector: "price"},
  ];
  const data = ["все", "стандартные", "острые"];
  const activeIndex = useSelector(state => state.pizzaList.categoryIndex);
  const sortingId = useSelector(state => state.pizzaList.sortingId);
  const dispatch = useDispatch();

  const createRequestUrl = () => {
    const {selector} = sortingData[sortingId];

    if (activeIndex === 0) {
      return `https://63fb8c614e024687bf7a8230.mockapi.io/pizzas?sortby=${selector}`;
    }

    return `https://63fb8c614e024687bf7a8230.mockapi.io/pizzas?category=${activeIndex}&sortby=${selector}`;
  };

  const handleActiveIndex = index => {
    dispatch(pizzaListCategoryIndexSet(index));
  };

  useEffect(() => {
    const requestUrl = createRequestUrl();
    fetch(requestUrl)
      .then(response => response.json())
      .then(data => dispatch(pizzaListLoaded(data)));
  }, [activeIndex, sortingId]);

  const elements = data.map((name, i) => {
    return <Filter key={i} index={i} activeIndex={activeIndex} onHandleActiveIndex={handleActiveIndex} name={name} />;
  });

  return (
    <div className="categories">
      <ul>{elements}</ul>
    </div>
  );
};

export default Filters;
