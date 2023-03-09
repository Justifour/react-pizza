import {memo, useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import qs from "qs";
import {useNavigate} from "react-router-dom";
import {PizzaListFilters} from "../PizzaListFilters/PizzaListFilters";
import {PizzaListSorting} from "../PizzaListSorting/PizzaListSorting";
import {pizzaListLoaded} from "../../store/actions";
import {createPizzaListUrl} from "../../../../utilities/createPizzaListUrl";

const PizzaListSettings = memo(() => {
  const sorting = useSelector((state) => state.pizzaList.sorting);
  const categories = useSelector((state) => state.pizzaList.categories);
  const activeSortingSelector = useSelector((state) => state.pizzaList.activeSortingSelector);
  const activeCategoryIndex = useSelector((state) => state.pizzaList.activeCategoryIndex);
  const searchValue = useSelector((state) => state.pizzaList.searchValue);
  const didMount = useRef(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (didMount.current) {
      const urlSearchParameters = qs.stringify({
        sortBy: activeSortingSelector,
        categoryIndex: activeCategoryIndex,
        searchValue,
      });
      const requestUrl = createPizzaListUrl(activeSortingSelector, activeCategoryIndex, searchValue);

      fetch(requestUrl)
        .then((response) => response.json())
        .then((data) => dispatch(pizzaListLoaded(data)));
      navigate(`?${urlSearchParameters}`);
    }

    didMount.current = true;
  }, [activeSortingSelector, activeCategoryIndex, searchValue]);

  return (
    <div className="content__top">
      <PizzaListFilters data={categories} activeIndex={activeCategoryIndex} />
      <PizzaListSorting data={sorting} activeSelector={activeSortingSelector} />
    </div>
  );
});

export {PizzaListSettings};
