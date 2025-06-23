import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">
          Vasiuddin.dev
        </Link>
        <div className="space-x-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/projects" className="hover:text-blue-600">Projects</Link>
          <Link to="/resume" className="hover:text-blue-600">Resume</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
