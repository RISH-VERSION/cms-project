import React from 'react';
import { Link } from 'react-router-dom';

function Signin() {
  return (
    <>
    <nav>
      <div className="flex justify-end items-center h-16 px-6 bg-white border-b border-gray-200 shadow-sm">
        <Link
          to="/"
          className="text-blue-600 font-semibold hover:underline px-4 py-2 rounded transition-colors"
        >
          Home
        </Link>
      </div>
    </nav>
    <div className="mx-auto mt-20 max-w-sm p-6 bg-white rounded-lg shadow-md border border-gray-300">
      <div className="text-center mb-6 text-blue-600">
        <h1 className="text-2xl font-bold">Login</h1>
      </div>
      <div className="mb-4">
        <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
          Username
        </label>
        <input
          id="username"
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your username"
        />
        <div className="my-4"></div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your password"
        />
        <div className="my-6"></div>
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors shadow-md border border-gray-300"
          >
            Sign in
          </button>
        </div>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?
          <Link to="/signup" className="ml-1 text-blue-600 hover:underline font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
    </>
  );
}

export default Signin;
