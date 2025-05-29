import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-12 py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} Vasiuddin Mohammed. All rights reserved.</p>
        <div className="space-x-4 mt-2 md:mt-0">
          <a href="https://github.com/vasiuddin7733" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/vasiuddin7733/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            LinkedIn
          </a>
          <a href="mailto:vasiuddin.mohammed1@gmail.com" className="hover:text-blue-600">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
