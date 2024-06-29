// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const handleLogout = () => {
    // Implement your logout logic here
    // For example, clearing session/local storage, etc.
    // Redirecting to main page after logout
    // Replace '/' with your main page route
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Inventory Management System
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-8">
          <Link
            to="/AddProduct"
            className="group relative w-full flex justify-center py-3 px-6 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Product
          </Link>
          <Link
            to="/viewProducts"
            className="group relative w-full flex justify-center py-3 px-6 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            View Product
          </Link>
          <Link
            to="/deleteProduct"
            className="group relative w-full flex justify-center py-3 px-6 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Delete Product
          </Link>
          <Link
            to="/updateProduct"
            className="group relative w-full flex justify-center py-3 px-6 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Update Product
          </Link>
          <button
            onClick={handleLogout}
            className="group relative w-full flex justify-center py-3 px-6 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
