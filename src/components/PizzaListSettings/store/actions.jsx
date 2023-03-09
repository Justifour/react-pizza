import {createAction} from "@reduxjs/toolkit";

const pizzaListLoaded = createAction("pizzaList/loaded");
const pizzaListActiveCategoryIndexSet = createAction("pizzaList/activeCategoryIndexSet");
const pizzaListActiveSortingSelectorSet = createAction("pizzaList/activeSortingSelector");

export {pizzaListLoaded, pizzaListActiveCategoryIndexSet, pizzaListActiveSortingSelectorSet};
