const PizzaListSortingItem = ({name, selector, activeSelector, handleClick}) => {
  const className = selector === activeSelector ? "active" : "";
  return (
    <li className={className} onClick={() => handleClick(selector)}>
      {name}
    </li>
  );
};

export {PizzaListSortingItem};
