// store/cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFoodItem } from "@/sanity/lib/interfaces"; // Import the IFoodItem type

interface CartItem {
  product: IFoodItem; // Use IFoodItem here
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const loadCartFromLocalStorage = (userId: string): CartItem[] => {
  if (typeof window !== "undefined") {
    const cartData = localStorage.getItem(`cart_${userId}`);
    if (cartData) {
      try {
        const parsedData = JSON.parse(cartData);
        // Validate the parsed data
        if (Array.isArray(parsedData)) {
          return parsedData.filter(
            (item) =>
              item.product &&
              item.product._id &&
              item.product.mainImageUrl &&
              item.quantity
          );
        }
      } catch (error) {
        console.error("Error parsing cart data from localStorage:", error);
      }
    }
  }
  return [];
};

const saveCartToLocalStorage = (userId: string, items: CartItem[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(`cart_${userId}`, JSON.stringify(items));
  }
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<{ userId: string; item: CartItem }>) => {
      const { userId, item } = action.payload;
      const itemIndex = state.items.findIndex(
        (cartItem) => cartItem.product._id === item.product._id
      );

      if (itemIndex > -1) {
        state.items[itemIndex].quantity += item.quantity;
      } else {
        state.items.push(item);
      }

      saveCartToLocalStorage(userId, state.items);
    },
    removeItem: (state, action: PayloadAction<{ userId: string; productId: string }>) => {
      const { userId, productId } = action.payload;
      state.items = state.items.filter(
        (item) => item.product._id !== productId
      );

      saveCartToLocalStorage(userId, state.items);
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ userId: string; productId: string; quantity: number }>
    ) => {
      const { userId, productId, quantity } = action.payload;
      const itemIndex = state.items.findIndex(
        (item) => item.product._id === productId
      );

      if (itemIndex > -1) {
        state.items[itemIndex].quantity = quantity;
        saveCartToLocalStorage(userId, state.items);
      }
    },
    clearCart: (state, action: PayloadAction<string>) => {
      const userId = action.payload;
      state.items = [];
      saveCartToLocalStorage(userId, state.items);
    },
    loadCart: (state, action: PayloadAction<string>) => {
      const userId = action.payload;
      state.items = loadCartFromLocalStorage(userId);
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart, loadCart } = cartSlice.actions;
export default cartSlice.reducer;