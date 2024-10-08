import React from 'react';

interface ButtonProps {
  variant: 'filled' | 'rounded' | 'outlined' | 'outlined-rounded';
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ variant, label, icon, onClick }) => {
  let buttonClasses = '';

  switch (variant) {
    case 'filled':
      buttonClasses =
        'bg-blue-500 text-white font-bold px-6 py-3 border-2 border-blue-500 rounded-md hover:bg-blue-600';
      break;
    case 'rounded':
      buttonClasses =
        'bg-blue-500 text-white font-bold px-6 py-3 rounded-full hover:bg-blue-600';
      break;
    case 'outlined':
      buttonClasses =
        'bg-transparent border-2 border-blue-500 text-blue-500 font-bold px-6 py-3 rounded-md hover:bg-blue-50';
      break;
    case 'outlined-rounded':
      buttonClasses =
        'bg-transparent border-2 border-blue-500 text-blue-500 font-bold px-6 py-3 rounded-full hover:bg-blue-50';
      break;
    default:
      buttonClasses = 'bg-blue-500 text-white font-bold px-6 py-3 rounded-md';
  }

  return (
    <button
      className={`${buttonClasses} transition duration-300 flex items-center space-x-2`}
      onClick={onClick}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      <span>{label}</span>{' '}
    </button>
  );
};

export default Button;
