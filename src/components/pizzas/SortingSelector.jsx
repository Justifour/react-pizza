const SortingItem = ({index, activeIndex, onHandleActiveIndex, name}) => {
  const className = index === activeIndex ? 'active' : '';
  return (
    <li className={className} onClick={() => onHandleActiveIndex(index)}>
      {name}
    </li>
  );
};

export default SortingItem;
