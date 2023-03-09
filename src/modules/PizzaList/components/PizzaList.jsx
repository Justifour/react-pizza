import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import qs from "qs";
import {PizzaListItem} from "../../../components/PizzaListItem";
import {PizzaListNotFound} from "../../../components/PizzaListNotFound";
import {pizzaListLoaded, PizzaListSettings} from "../../../components/PizzaListSettings";
import PizzaListSkeleton from "../../../components/PizzaListSkeleton";
import {createPizzaListUrl} from "../../../helpers/createPizzaListUrl";

const PizzaList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.pizzaList.data);
  const sortingData = useSelector((state) => state.pizzaList.sortingData);
  const sortingId = useSelector((state) => state.pizzaList.sortingId);
  const categoryIndex = useSelector((state) => state.pizzaList.categoryIndex);
  const searchValue = useSelector((state) => state.pizzaList.searchValue);
  const [isLoading, setIsLoading] = useState(true);

  const createPizzaList = () => {
    if (data.length === 0) {
      return <PizzaListNotFound />;
    }
    return data.map(({id, ...properties}) => <PizzaListItem key={id} {...properties} />);
  };

  useEffect(() => {
    const {selector} = sortingData[sortingId];
    // const urlSearchParameters = qs.parse("sortBy=default&categoryIndex=0&searchValue=");
    const requestUrl = createPizzaListUrl(selector, searchValue, categoryIndex);

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
