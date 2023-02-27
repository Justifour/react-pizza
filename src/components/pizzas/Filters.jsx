import {useState} from 'react';
import Filter from './Filter';

const Filters = () => {
  const data = ['все', 'мясные', 'вегетарианские', 'гриль', 'острые', 'закрытые'];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleActiveIndex = index => {
    setActiveIndex(index);
  };

  const filters = data.map((name, i) => {
    return <Filter key={i} index={i} activeIndex={activeIndex} onHandleActiveIndex={handleActiveIndex} name={name} />;
  });

  return (
    <div className="categories">
      <ul>{filters}</ul>
    </div>
  );
};

export default Filters;
