import { createSlice } from "@reduxjs/toolkit";
import { FETCH_ALL_PRODUCTS } from "../Constants/Constants";

const ProductSlice=createSlice({
    name:'product',
    initialState:{
        products:[],
        error:'',
        loading:false,
        },
        reducers:{
            fetchProducts: (state, action) => {
                state.products = action.payload;
                state.loading = false;
              },
              StatusLoading: (state) => {
                state.loading = true;
              },
              StatusError: (state, action) => {
                state.error = action.payload;
                state.loading = false;
              },
            }

})
export const{fetchProducts,StatusLoading,StatusError}=ProductSlice.actions;
export default ProductSlice.reducer;

export const FetchProduct = () => {
    return async function fetchProductThunk(dispatch) {
      dispatch(StatusLoading());
      try {
        const res = await fetch(FETCH_ALL_PRODUCTS);
        const data = await res.json();
        dispatch(fetchProducts(data));
      } catch (error) {
        dispatch(StatusError(error.message));
      
      }
    };
  };