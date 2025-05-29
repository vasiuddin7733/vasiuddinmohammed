import React from "react";

const Button = ({ children, variant = "primary", className = "", ...props }) => {
  const baseStyles = "px-4 py-2 rounded-xl text-sm font-semibold shadow transition";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant] || ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
