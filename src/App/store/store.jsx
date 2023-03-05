import {configureStore} from '@reduxjs/toolkit';
import {PizzaListReducer as pizzaList} from '../../pages';

const store = configureStore({
  reducer: {pizzaList},
});

export default store;
