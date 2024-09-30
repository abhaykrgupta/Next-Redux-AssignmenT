"use client";
import { Provider } from 'react-redux';
import store from '@/redux/store/store';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';

const Page = () => {
  return (
    <Provider store={store}>
      <div className="container mx-auto p-4">
        <SearchBar />
        <CategoryFilter />
        <ProductList />
      </div>
    </Provider>
  );
};

export default Page;
