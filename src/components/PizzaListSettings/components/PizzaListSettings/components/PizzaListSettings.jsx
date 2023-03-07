import {PizzaListFilters} from "../../PizzaListFilters";
import {PizzaListSorting} from "../../PizzaListSorting";
import {pizzaListLoaded} from "../../../store/actions";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef} from "react";

const PizzaListSettings = () => {
  const sortingData = [
    {id: 0, name: "умолчанию", selector: "default"},
    {id: 1, name: "популярности", selector: "rating"},
    {id: 2, name: "цене", selector: "price"},
  ];
  const categoriesData = ["все", "стандартные", "острые"];
  const didMountRef = useRef(false);
  const sortingId = useSelector((state) => state.pizzaList.sortingId);
  const categoryIndex = useSelector((state) => state.pizzaList.categoryIndex);
  const dispatch = useDispatch();

  const createRequestUrl = () => {
    const {selector} = sortingData[sortingId];

    if (categoryIndex === 0) {
      return `https://63fb8c614e024687bf7a8230.mockapi.io/pizzas?sortby=${selector}`;
    }

    return `https://63fb8c614e024687bf7a8230.mockapi.io/pizzas?category=${categoryIndex}&sortby=${selector}`;
  };

  useEffect(() => {
    if (didMountRef.current) {
      const requestUrl = createRequestUrl();
      fetch(requestUrl)
        .then((response) => response.json())
        .then((data) => dispatch(pizzaListLoaded(data)));
    }
    didMountRef.current = true;
  }, [sortingId, categoryIndex]);

  return (
    <div className="content__top">
      <PizzaListFilters sortingData={sortingData} categoriesData={categoriesData} />
      <PizzaListSorting sortingData={sortingData} />
    </div>
  );
};

export default PizzaListSettings;
