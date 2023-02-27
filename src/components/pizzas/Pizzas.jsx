import {useEffect, useState} from 'react';
import Pizza from './Pizza';

const Pizzas = () => {
  const [data, setData] = useState([]);
  const pizzas = data.map(({id, ...properties}) => <Pizza key={id} {...properties} />);

  useEffect(() => {
    fetch('https://63fb8c614e024687bf7a8230.mockapi.io/pizzas')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="container">
      <div className="content__items">{pizzas}</div>
    </div>
  );
};

export default Pizzas;
