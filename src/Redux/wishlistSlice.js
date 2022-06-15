import { createSlice } from "@reduxjs/toolkit";
import Items from "./Items";

const initialState = {
  wishlist: [],
  products: Items,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToList(state, action) {
      const item = state.products.find(
        (product) => product.id === action.payload
      );
      const inCart = state.wishlist.find((item) =>
        item.id === action.payload ? true : false
      );

      return {
        ...state,
        wishlist: inCart
          ? state.wishlist.map((item) =>
              item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
            )
          : [...state.wishlist, { ...item, qty: 1 }],
      };
    },
    removeFromList(state, action) {
      const item = action.payload;
      return {
        ...state,
        wishlist: state.wishlist.filter((product) => product.id !== item.id),
      };
    },
  },
});

export const actions = wishlistSlice.actions;
const wishlistReducer = wishlistSlice.reducer;
export default wishlistReducer;
