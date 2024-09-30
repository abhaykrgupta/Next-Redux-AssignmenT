import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get('https://dummyjson.com/products');
  return response.data.products;
});

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    filteredItems: [],
    loading: false,
    error: null,
    selectedCategory: 'All',
    searchQuery: '',
  },
  reducers: {
    // reducer to set category
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
      state.filteredItems = filterProducts(state.items, state.searchQuery, state.selectedCategory);
    },
    // reducer to set search query
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      state.filteredItems = filterProducts(state.items, state.searchQuery, state.selectedCategory);
    },
  },
  extraReducers: (builder) => {
    // it will handle async related to fetching products
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.filteredItems = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

// Utility function to filter products
const filterProducts = (items, query, category) => {
  let filtered = items;
  if (category !== 'All') {
    filtered = filtered.filter((item) => item.category === category);
  }
  if (query) {
    filtered = filtered.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()));
  }
  return filtered;
};

export const { setCategory, setSearchQuery } = productSlice.actions;
export default productSlice.reducer;
