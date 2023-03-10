import {DebounceInput} from "react-debounce-input";
import {useDispatch, useSelector} from "react-redux";
import {TextInput} from "../../../ui/TextInput";
import {pizzaListSearched} from "../store/actions";
import styles from "../styles/PizzaListSearch.module.scss";

const PizzaListSearch = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(state => state.pizzaList.searchValue);

  const handleClick = () => {
    dispatch(pizzaListSearched(""));
  };

  const handleChange = ({target}) => {
    const lowerCaseValue = target.value.toLowerCase();
    dispatch(pizzaListSearched(lowerCaseValue));
  };

  return (
    <div className={styles.root}>
      <svg
        width="22px"
        height="22px"
        class={styles.magnifier}
        enableBackground="new 0 0 32 32"
        version="1.1"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="14"
          cy="14"
          fill="none"
          id="XMLID_42_"
          r="9"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <line
          fill="none"
          id="XMLID_44_"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          x1="27"
          x2="20.366"
          y1="27"
          y2="20.366"
        />
      </svg>
      <DebounceInput value={searchValue} onChange={handleChange} debounceTimeout={300} element={TextInput} />
      {searchValue && (
        <svg width="18px" height="18px" onClick={handleClick} className={styles.cross} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>
      )}
    </div>
  );
};

export {PizzaListSearch};
