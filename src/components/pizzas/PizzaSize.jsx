const PizzaSize = ({index, activeIndex, onChangeActiveSizeIndex, size}) => {
  const className = index === activeIndex ? 'active' : '';
  return (
    <li className={className} onClick={() => onChangeActiveSizeIndex(index)}>
      {size} см.
    </li>
  );
};

export default PizzaSize;
