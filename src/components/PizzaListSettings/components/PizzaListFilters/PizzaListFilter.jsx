const PizzaListFilter = ({name, index, activeIndex, handleClick}) => {
  const className = index === activeIndex ? "active" : "";
  return (
    <li className={className} onClick={() => handleClick(index)}>
      {name}
    </li>
  );
};

export {PizzaListFilter};
