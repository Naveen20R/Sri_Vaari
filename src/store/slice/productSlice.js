import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProductService } from "../../services/service/productService";

// Async thunk for fetching data from an API
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (reqData) => {
    try {
      console.log(reqData);
      const response = await getProductService(reqData);
      console.log(response);
      if (response.status == 200) {
        return response.data;
      } else if (response.status != 200) {
        
        // toastMessage("error", response.message);
      }
    } catch (error) {
      console.log(error);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    // Additional reducers if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
