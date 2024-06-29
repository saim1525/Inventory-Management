// src/components/DeleteProductById.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DeleteProductById = () => {
  const [productId, setProductId] = useState('');

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/deleteProduct/${productId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('Product deleted successfully');
      } else {
        const errorData = await response.json();
        alert('Error: ' + errorData.message);
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }

    // Reset the input field
    setProductId('');
  };

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
      <div className="max-w-md w-full bg-white shadow-md rounded-md overflow-hidden mt-4">
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Delete Product by ID</h2>
          <div>
            <label htmlFor="productId" className="block text-sm font-medium text-gray-700">
              Product ID
            </label>
            <input
              type="text"
              id="productId"
              name="productId"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter Product ID"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
              required
            />
          </div>
          <div className="mt-6">
            <button
              onClick={handleDelete}
              className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Delete Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteProductById;
