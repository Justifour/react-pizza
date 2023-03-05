import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {PizzaListItem} from "../../../components/PizzaListItem";
import Skeleton from "../../../components/Skeleton";
import {pizzaListLoaded} from "../slices/slice";

const PizzaList = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.pizzaList.data);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://63fb8c614e024687bf7a8230.mockapi.io/pizzas")
      .then(response => response.json())
      .then(data => dispatch(pizzaListLoaded(data)))
      .finally(() => setIsLoading(false));
  }, []);

  const pizzaList = data.map(({id, ...properties}) => <PizzaListItem key={id} {...properties} />);
  const skeletons = Array(8)
    .fill(0)
    .map((_, i) => <Skeleton key={i} />);

  return (
    <div className="container">
      <div className="content__items">{isLoading ? skeletons : pizzaList}</div>
    </div>
  );
};

export default PizzaList;
