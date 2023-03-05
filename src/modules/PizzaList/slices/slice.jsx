import {createSlice} from "@reduxjs/toolkit";
import {pizzaListCategoryIndexSet as categoryIndexSet, pizzaListLoaded as loaded} from "../../../components/Filters";
import {pizzaListSortingIdSet as sortingIdSet} from "../../../components/Sorting";

const initialState = {
  data: [],
  categoryIndex: 0,
  sortingId: 0,
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
  },
});

export {loaded as pizzaListLoaded};
export default slice.reducer;
