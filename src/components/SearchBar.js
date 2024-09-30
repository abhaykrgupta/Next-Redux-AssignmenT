import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "@/redux/store/productsSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.products.searchQuery);

  const handleSearchChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div className="mb-6 flex flex-col md:flex-row items-center justify-between">
      <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-0">
        Search Products
      </h2>
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="border rounded-lg p-2 w-full md:w-1/2 lg:w-1/3"
      />
    </div>
  );
};

export default SearchBar;
