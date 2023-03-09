import {DebounceInput} from "react-debounce-input";
import {useDispatch, useSelector} from "react-redux";
import {TextInput, magnifierIcon, crossIcon} from "../../../ui/TextInput";
import {pizzaListSearched} from "../store/actions";
import styles from "../styles/PizzaListSearch.module.scss";

const PizzaListSearch = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.pizzaList.searchValue);

  const handleClick = () => {
    dispatch(pizzaListSearched(""));
  };

  const handleChange = ({target}) => {
    const lowerCaseValue = target.value.toLowerCase();
    dispatch(pizzaListSearched(lowerCaseValue));
  };

  return (
    <div className={styles.root}>
      <img className={styles.magnifier} src={magnifierIcon} />
      <DebounceInput value={searchValue} onChange={handleChange} debounceTimeout={300} element={TextInput} />
      {searchValue && <img onClick={handleClick} className={styles.cross} src={crossIcon} />}
    </div>
  );
};

export {PizzaListSearch};
