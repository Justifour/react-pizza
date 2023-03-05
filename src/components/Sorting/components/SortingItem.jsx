const SortingItem = ({id, activeId, onHandleActiveId, name}) => {
  const className = id === activeId ? "active" : "";
  return (
    <li className={className} onClick={() => onHandleActiveId(id)}>
      {name}
    </li>
  );
};

export default SortingItem;
