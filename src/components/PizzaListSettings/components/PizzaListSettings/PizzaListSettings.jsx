import {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import qs from "qs";
import {useNavigate} from "react-router-dom";
import {PizzaListFilters} from "../PizzaListFilters/PizzaListFilters";
import {PizzaListSorting} from "../PizzaListSorting/PizzaListSorting";
import {pizzaListLoaded} from "../../store/actions";
import {createPizzaListUrl} from "../../../../helpers/createPizzaListUrl";

const PizzaListSettings = () => {
  const sortingData = useSelector((state) => state.pizzaList.sortingData);
  const categoriesData = useSelector((state) => state.pizzaList.categoriesData);
  const sortingId = useSelector((state) => state.pizzaList.sortingId);
  const categoryIndex = useSelector((state) => state.pizzaList.categoryIndex);
  const searchValue = useSelector((state) => state.pizzaList.searchValue);
  const didMount = useRef(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (didMount.current) {
      const {selector} = sortingData[sortingId];
      const urlSearchParameters = qs.stringify({
        sortBy: selector,
        categoryIndex,
        searchValue,
      });
      const requestUrl = createPizzaListUrl(selector, searchValue, categoryIndex);

      fetch(requestUrl)
        .then((response) => response.json())
        .then((data) => dispatch(pizzaListLoaded(data)));
      navigate(`?${urlSearchParameters}`);
    }
    didMount.current = true;
  }, [sortingId, categoryIndex, searchValue]);

  return (
    <div className="content__top">
      <PizzaListFilters categoryIndex={categoryIndex} categoriesData={categoriesData} />
      <PizzaListSorting sortingId={sortingId} sortingData={sortingData} />
    </div>
  );
};

export {PizzaListSettings};
