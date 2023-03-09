import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {PizzaListItem} from "../../../components/PizzaListItem";
import {PizzaListNotFound} from "../../../components/PizzaListNotFound";
import {PizzaListSettings, pizzaListLoaded} from "../../../components/PizzaListSettings";
import PizzaListSkeleton from "../../../components/PizzaListSkeleton";
import {createPizzaListUrl} from "../../../utilities/createPizzaListUrl";

const PizzaList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.pizzaList.data);
  const activeSortingSelector = useSelector((state) => state.pizzaList.activeSortingSelector);
  const activeCategoryIndex = useSelector((state) => state.pizzaList.activeCategoryIndex);
  const searchValue = useSelector((state) => state.pizzaList.searchValue);
  const [isLoading, setIsLoading] = useState(true);

  const createPizzaList = () => {
    if (data.length === 0) {
      return <PizzaListNotFound />;
    }
    return data.map(({id, ...properties}) => <PizzaListItem key={id} {...properties} />);
  };

  useEffect(() => {
    const requestUrl = createPizzaListUrl(activeSortingSelector, activeCategoryIndex, searchValue);
    fetch(requestUrl)
      .then((response) => response.json())
      .then((data) => dispatch(pizzaListLoaded(data)))
      .finally(() => setIsLoading(false));
  }, []);

  const pizzaList = createPizzaList();
  const skeletons = Array(8)
    .fill(0)
    .map((_, i) => <PizzaListSkeleton key={i} />);

  return (
    <>
      <div className="content">
        <div className="container">
          <PizzaListSettings />
        </div>
      </div>
      <div className="container">
        <div className="content__items">{isLoading ? skeletons : pizzaList}</div>
      </div>
    </>
  );
};

export default PizzaList;
