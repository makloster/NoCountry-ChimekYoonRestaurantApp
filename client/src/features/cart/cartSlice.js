import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "balbal",
    image: "dasdasdsa",
    price: 20,
    _id: "787987",
  },
];

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem: (state, action) => {
      /*  [...state, action.payload]; */
      state.push(action.payload);
    },
  },
});

/* console.log(initialState, "estado inicial"); */

// Action creators are generated for each case reducer function
export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
