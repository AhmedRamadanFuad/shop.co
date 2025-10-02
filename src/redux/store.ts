import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/redux/features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

if (typeof window !== "undefined") {
  store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem("cart", JSON.stringify(state.cart));
  });
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
