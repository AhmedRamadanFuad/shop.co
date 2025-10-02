import { createSlice } from "@reduxjs/toolkit";

const savedCart =
  typeof window !== "undefined" ? localStorage.getItem("cart") : null;

let parsedCart = null;

if (savedCart) {
  try {
    parsedCart = JSON.parse(savedCart);
  } catch (e) {
    console.error("Error parsing saved cart:", e);
  }
}

export type Product = {
  id: number;
  name: string;
  price: number;
  originalPrice: number | null;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  colors: string[];
  sizes: string[];
  style: string;
};

export type CartItem = Product & {
  selectedColor: string;
  selectedSize: string;
  quantity: number;
};

const initialState = parsedCart || {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const { product, selectedColor, selectedSize, quantity } = action.payload;

      // Create unique item key based on product id, color, and size
      const itemKey = `${product.id}-${selectedColor}-${selectedSize}`;

      // Check if item already exists in cart
      const existingItemIndex = state.items.findIndex(
        (item: CartItem) =>
          item.id === product.id &&
          item.selectedColor === selectedColor &&
          item.selectedSize === selectedSize
      );

      let newItems;
      if (existingItemIndex >= 0) {
        // Update existing item quantity
        newItems = [...state.items];
        newItems[existingItemIndex] = {
          ...newItems[existingItemIndex],
          quantity: newItems[existingItemIndex].quantity + quantity,
        };
      } else {
        // Add new item to cart
        newItems = [
          ...state.items,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            originalPrice: product.originalPrice,
            selectedColor,
            selectedSize,
            quantity,
            itemKey,
          },
        ];
      }

      return {
        ...state,
        items: newItems,
        totalItems: state.totalItems + quantity,
        totalPrice: state.totalPrice + product.price * quantity,
      };
    },
    removeCartItem: (state, action) => {
      const { id, selectedColor, selectedSize } = action.payload;

      const itemIndex = state.items.findIndex(
        (item: CartItem) =>
          item.id === id &&
          item.selectedColor === selectedColor &&
          item.selectedSize === selectedSize
      );

      if (itemIndex >= 0) {
        const item = state.items[itemIndex];

        // Deduct the full quantity and price of this item
        state.totalItems -= item.quantity;
        state.totalPrice -= item.price * item.quantity;

        // Remove the item completely
        state.items.splice(itemIndex, 1);
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find(
        (i: CartItem) =>
          i.id === action.payload.id &&
          i.selectedColor === action.payload.selectedColor &&
          i.selectedSize === action.payload.selectedSize
      );

      if (!item) return;

      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        // if quantity is 1 → remove item
        state.items = state.items.filter(
          (i: CartItem) =>
            !(
              i.id === action.payload.id &&
              i.selectedColor === action.payload.selectedColor &&
              i.selectedSize === action.payload.selectedSize
            )
        );
      }

      state.totalItems = state.items.reduce(
        (sum: number, item: CartItem) => sum + item.quantity,
        0
      );
      state.totalPrice = state.items.reduce(
        (sum: number, item: CartItem) => sum + item.price * item.quantity,
        0
      );
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find(
        (i: CartItem) =>
          i.id === action.payload.id &&
          i.selectedColor === action.payload.selectedColor &&
          i.selectedSize === action.payload.selectedSize
      );

      if (item) {
        item.quantity += 1;
      }

      state.totalItems = state.items.reduce(
        (sum: number, item: CartItem) => sum + item.quantity,
        0
      );
      state.totalPrice = state.items.reduce(
        (sum: number, item: CartItem) => sum + item.price * item.quantity,
        0
      );
    },
  },
});

export const {
  addCartItem,
  removeCartItem,
  decreaseQuantity,
  increaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
