import {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {PizzaListFilters} from "../PizzaListFilters/PizzaListFilters";
import {PizzaListSorting} from "../PizzaListSorting/PizzaListSorting";
import {pizzaListLoaded} from "../../store/actions";

const PizzaListSettings = () => {
  const sortingData = [
    {id: 0, name: "умолчанию", selector: "default"},
    {id: 1, name: "популярности", selector: "rating"},
    {id: 2, name: "цене", selector: "price"},
  ];
  const categoriesData = ["все", "стандартные", "острые"];
  const didMountRef = useRef(false);
  const sortingId = useSelector(state => state.pizzaList.sortingId);
  const categoryIndex = useSelector(state => state.pizzaList.categoryIndex);
  const searchValue = useSelector(state => state.pizzaList.searchValue);
  const dispatch = useDispatch();

  const createRequestUrl = () => {
    const {selector} = sortingData[sortingId];
    if (!searchValue) {
      if (categoryIndex === 0) {
        return `https://63fb8c614e024687bf7a8230.mockapi.io/pizzas?sortby=${selector}`;
      }

      return `https://63fb8c614e024687bf7a8230.mockapi.io/pizzas?category=${categoryIndex}&sortby=${selector}`;
    } else {
      if (categoryIndex === 0) {
        return `https://63fb8c614e024687bf7a8230.mockapi.io/pizzas?search=${searchValue}&sortby=${selector}`;
      }

      return `https://63fb8c614e024687bf7a8230.mockapi.io/pizzas?search=${searchValue}&sortby=${selector}`;
    }
  };

  useEffect(() => {
    if (didMountRef.current) {
      const requestUrl = createRequestUrl();
      fetch(requestUrl)
        .then(response => response.json())
        .then(data => dispatch(pizzaListLoaded(data)));
    }
    didMountRef.current = true;
  }, [sortingId, categoryIndex, searchValue]);

  return (
    <div className="content__top">
      <PizzaListFilters sortingData={sortingData} categoriesData={categoriesData} />
      <PizzaListSorting sortingData={sortingData} />
    </div>
  );
};

export {PizzaListSettings};
