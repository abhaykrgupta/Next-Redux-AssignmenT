import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '@/redux/store/productsSlice';

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.products.selectedCategory);
  const categories = ["All", "beauty", "fragrances", "furniture", "groceries"]; {/* if needed we can create more categories*/}

  return (
    <div className="mb-4">
      <span className="mr-2 font-semibold">Filter by Category:</span>
      {categories.map((category) => (
        <button
          key={category}
          className={`mr-2 px-4 py-2 rounded ${
            selectedCategory === category ? 'bg-blue-500 text-white transform transition duration-300 ' : 'bg-gray-200'
          }`}
          onClick={() => dispatch(setCategory(category))}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
