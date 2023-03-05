import {createAction} from "@reduxjs/toolkit";

const pizzaListLoaded = createAction("pizzaList/loaded");
const pizzaListCategoryIndexSet = createAction("pizzaList/categoryIndexSet");

export {pizzaListLoaded, pizzaListCategoryIndexSet};
