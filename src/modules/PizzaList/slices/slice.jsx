import {createSlice} from "@reduxjs/toolkit";
import qs from "qs";
import {
  pizzaListLoaded as loaded,
  pizzaListActiveCategoryIndexSet as activeCategoryIndexSet,
} from "../../../components/PizzaListSettings";
import {pizzaListActiveSortingSelectorSet as activeSortingSelectorSet} from "../../../components/PizzaListSettings";
import {pizzaListSearched as searched} from "../../../components/PizzaListSearch";

const {search} = window.location;
const {sortBy = "default", categoryIndex = 0, searchValue = ""} = qs.parse(search.slice(1));
const categoryIndexAsNumber = Number(categoryIndex);

const initialState = {
  searchValue: searchValue,
  activeSortingSelector: sortBy,
  activeCategoryIndex: categoryIndexAsNumber,
  data: [],
  sorting: [
    {id: 0, name: "умолчанию", selector: "default"},
    {id: 1, name: "популярности", selector: "rating"},
    {id: 2, name: "цене", selector: "price"},
  ],
  categories: ["все", "стандартные", "острые"],
};
const slice = createSlice({
  name: "pizzaList",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(loaded, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(activeCategoryIndexSet, (state, action) => {
      state.activeCategoryIndex = action.payload;
    });
    builder.addCase(activeSortingSelectorSet, (state, action) => {
      state.activeSortingSelector = action.payload;
    });
    builder.addCase(searched, (state, action) => {
      state.activeCategoryIndex = 0;
      state.searchValue = action.payload;
    });
  },
});

export default slice.reducer;
