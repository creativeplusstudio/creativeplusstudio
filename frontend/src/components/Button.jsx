import React from "react";

export function Button({ text, onClick, type = "button", disabled = false }) {
  return (
    <button 
      onClick={onClick} 
      type={type}
      disabled={disabled}
      className={`bg-orange-500 text-white px-4 py-2 rounded-full shadow-md transition-all duration-300 
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white hover:text-orange-500 hover:border hover:border-orange-500'}`}
    >
      {text}
    </button>
  );
}
