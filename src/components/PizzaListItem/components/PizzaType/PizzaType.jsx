const PizzaType = ({index, activeIndex, onChangeActiveTypeIndex, type}) => {
  const className = index === activeIndex ? "active" : "";
  return (
    <li className={className} onClick={() => onChangeActiveTypeIndex(index)}>
      {type}
    </li>
  );
};

export {PizzaType};
