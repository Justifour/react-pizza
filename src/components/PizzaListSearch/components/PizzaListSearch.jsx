import {DebounceInput} from "react-debounce-input";
import {useDispatch, useSelector} from "react-redux";
import {TextInput, magnifierIcon, crossIcon} from "../../../ui/TextInput";
import {pizzaListSearched} from "../store/actions";
import styles from "../styles/PizzaListSearch.module.scss";

const PizzaListSearch = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.pizzaList.searchValue);

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
      <DebounceInput value={value} onChange={handleChange} debounceTimeout={300} element={TextInput} />
      {value && <img onClick={handleClick} className={styles.cross} src={crossIcon} />}
    </div>
  );
};

export {PizzaListSearch};
