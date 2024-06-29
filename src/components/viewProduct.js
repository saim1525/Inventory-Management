// src/components/ViewProducts.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ViewProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-start items-center py-6 px-4 sm:px-6 lg:px-8">
      <Link to="/homepage" className="text-indigo-600 hover:text-indigo-900 mb-4 cursor-pointer flex items-center">
        <svg
          className="w-6 h-6 inline-block align-middle mr-1 mb-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back
      </Link>
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg overflow-hidden mt-4">
        <div className="p-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">View Products</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product ID
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products.map((product) => (
                  <tr key={product.productId}>
                    <td className="px-6 py-4 whitespace-nowrap">{product.productId}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{product.productName}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{product.quantity}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{product.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProducts;
