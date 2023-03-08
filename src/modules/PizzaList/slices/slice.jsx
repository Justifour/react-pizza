import {createSlice} from "@reduxjs/toolkit";
import {pizzaListSearched as searched} from "../../../components/PizzaListSearch";
import {pizzaListCategoryIndexSet as categoryIndexSet, pizzaListLoaded as loaded} from "../../../components/PizzaListSettings";
import {pizzaListSortingIdSet as sortingIdSet} from "../../../components/PizzaListSettings";

const initialState = {
  data: [],
  categoryIndex: 0,
  sortingId: 0,
  searchValue: "",
};
const slice = createSlice({
  name: "pizzaList",
  initialState,
  extraReducers: builder => {
    builder.addCase(loaded, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(categoryIndexSet, (state, action) => {
      state.categoryIndex = action.payload;
    });
    builder.addCase(sortingIdSet, (state, action) => {
      state.sortingId = action.payload;
    });
    builder.addCase(searched, (state, action) => {
      state.categoryIndex = 0;
      state.searchValue = action.payload;
    });
  },
});

export default slice.reducer;
