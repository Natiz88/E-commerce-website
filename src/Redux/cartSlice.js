import Items from './Items';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products:Items,
    cart:[],
    currentItem:null
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state, action) {
            const item = state.products.find(
              (product) => product.id === action.payload
            );
            const inCart = state.cart.find((item) =>
              item.id === action.payload ? true : false
            );
      
            return {
              ...state,
              cart: inCart
                ? state.cart.map((item) =>
                    item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
                  )
                : [...state.cart, { ...item, qty: 1 }]
            };
          },
          addQty(state, action) {
            return {
              ...state,
              cart: state.cart.map((item) =>
                item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
              )
            };
          },
          subQty(state, action) {
            console.log("helo");
            return {
              ...state,
              cart: state.cart.map((item) =>
                item.id === action.payload && item.qty > 1
                  ? { ...item, qty: item.qty - 1 }
                  : item
              )
            };
          },
          removeFromCart(state, action) {
            return {
              ...state,
              cart: state.cart.filter((item) => item.id !== action.payload)
            };
          },
    }
})
export const actionTypes = cartSlice.actions;
const cartReducer = cartSlice.reducer
export default cartReducer;