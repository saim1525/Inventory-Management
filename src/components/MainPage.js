// src/components/MainPage.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component

const MainPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Inventory Management System
          </h2>
        </div>
        <div className="flex justify-center">
          <Link
            to="/loginpage"
            className="group relative w-1/2 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="group relative w-1/2 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ml-4"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
