import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '@/redux/store/productsSlice';

const ProductList = () => {
  const dispatch = useDispatch();
  const { filteredItems, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <div className="text-center p-4">Loading......</div>;
  if (error) return <div className="text-center p-4 text-red-500">Error: {error}</div>;

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredItems.map((item) => (
        <li
          className="bg-white rounded-lg shadow-lg p-4 border border-gray-200  hover:shadow-xl hover:border-gray-500 cursor-pointer "
          key={item.id}
          
        >
          <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
          <div className='flex justify-center mb-2'>
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-48 h-48  rounded-md mb-2"
          />
          </div>
          <p className="text-gray-700 mb-1">{item.description}</p>
          <p className="font-bold mb-1">
            Price: <span className="text-green-600">${item.price.toFixed(2)}</span>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
