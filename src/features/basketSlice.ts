import type { IBasketState, IProduct } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: IBasketState = {
  products: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<IProduct>) {
      state.products.push(action.payload);
    },
    removeProduct(state, action: PayloadAction<{ id: number }>) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id,
      );
    },
  },
  selectors: {
    getBasketProducts: (state) => state.products,
  },
});

export default basketSlice.reducer;
export const { addProduct, removeProduct } = basketSlice.actions;
export const { getBasketProducts } = basketSlice.selectors;
