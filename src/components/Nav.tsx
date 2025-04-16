import React from "react";

const Nav: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold">DataTable App</h1>
            <div className="hidden md:flex space-x-4">
              <a href="#" className="hover:text-blue-200 transition-colors">
                Home
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors">
                Dashboard
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors">
                Analytics
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <button className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-blue-100 transition-colors">
              Login
            </button>
          </div>
          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
