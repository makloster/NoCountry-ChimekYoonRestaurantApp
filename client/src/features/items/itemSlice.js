import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

const API_URL = "http://localhost:4000/api/item";

export const todosApi = createApi({
  reducerPath: "todos",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/item",
  }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/",
    }),
  }),
});

export const { useGetTodosQuery } = todosApi;

/* const itemSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
  },
  reducers: {
    setProductList: (state, action) => {
      state.items = action.payload; // payload trae la lista de productos (hamburguesas,bebidas,etc)
    },
  },
});

export const fetchAllProducts = () => async (dispatch) => {
  await axios
    .get(API_URL)
    .then((res) => {
      dispatch(setProductList(res.data));
    })
    .catch((err) => console.log(err));
};

export default itemSlice.reducer;
 
export const { setProductList } = itemSlice.actions; */
