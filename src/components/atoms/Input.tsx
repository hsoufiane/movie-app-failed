import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // Ajoutez des props personnalisées si nécessaire
}

const Input: React.FC<InputProps> = props => {
  return (
    <input
      {...props}
      className={`w-full px-4 py-2 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${props.className}`}
    />
  );
};

export default Input;
