import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartState = {
  items: Game[];
  isOpen: boolean;
};

const initialState: CartState = {
  items: [],
  isOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Game>) => {
      const game = state.items.find((item) => item.id === action.payload.id);

      if (!game) {
        //caso o game ainda nao esteja no carrinho ele pode adicionar
        state.items.push(action.payload);
      } else alert("Jogo já adicionado ao carrinho de compras."); //caso ja esteja aparecerá esse aviso nma tela
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
    clear: (state) => {
      state.items = [];
    },
  },
});

export const { add, close, open, remove, clear } = cartSlice.actions;
export default cartSlice.reducer;
