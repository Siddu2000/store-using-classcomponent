import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "search",
  initialState: [],
  reducers: {
    setSearchTerm: (state, action) => {
    return state=action.payload
    },
  },
});
export const { setSearchTerm } = SearchSlice.actions;
export default SearchSlice.reducer;
