import {createAction} from "@reduxjs/toolkit";

const pizzaListLoaded = createAction("pizzaList/loaded");
const pizzaListCategoryIndexSet = createAction("pizzaList/categoryIndexSet");
const pizzaListSortingIdSet = createAction("pizzaList/sortingIdSet");

export {pizzaListSortingIdSet, pizzaListLoaded, pizzaListCategoryIndexSet};
