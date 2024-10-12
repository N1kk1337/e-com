import React from 'react';
import { FaApple, FaGooglePlay, FaAmazon, FaWindows } from 'react-icons/fa';

interface StoreButtonProps {
  platform: 'appstore' | 'googleplay' | 'amazon' | 'windows';
  variant?: 'light' | 'dark';
}

const StoreButton: React.FC<StoreButtonProps> = ({
  platform,
  variant = 'light',
}) => {
  let icon, label;

  switch (platform) {
    case 'appstore':
      icon = <FaApple className="w-6 h-6" />;
      label = (
        <>
          <span>Download on the</span>
          <br />
          <span className="font-semibold">App Store</span>
        </>
      );
      break;
    case 'googleplay':
      icon = <FaGooglePlay className="w-6 h-6" />;
      label = (
        <>
          <span>Download on the</span>
          <br />
          <span className="font-semibold">Google Play</span>
        </>
      );
      break;
    case 'amazon':
      icon = <FaAmazon className="w-6 h-6" />;
      label = (
        <>
          <span>Download on the</span>
          <br />
          <span className="font-semibold">Amazon.com</span>
        </>
      );
      break;
    case 'windows':
      icon = <FaWindows className="w-6 h-6" />;
      label = (
        <>
          <span>Download on the</span>
          <br />
          <span className="font-semibold">Windows Store</span>
        </>
      );
      break;
    default:
      return null;
  }

  // Определяем стили кнопки в зависимости от варианта
  const buttonClasses =
    variant === 'light'
      ? 'flex items-center space-x-4 px-6 py-4 bg-white border-2 border-gray-300 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-gray-800'
      : 'flex items-center space-x-4 px-6 py-4 bg-gray-800 text-white rounded-lg shadow-md hover:shadow-lg transition duration-300';

  return (
    <button className={buttonClasses}>
      <div className="flex items-center">{icon}</div>
      <div className="text-left">{label}</div>
    </button>
  );
};

export default StoreButton;
