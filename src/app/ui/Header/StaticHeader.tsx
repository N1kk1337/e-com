import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import SocialButton from '../SocialButton/SocialButton';

export default function StaticHeader() {
  return (
    <div className="bg-gray-900 text-white p-2 w-full">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Left section with phone and email */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <FaPhoneAlt />
            <a href="tel:225-555-0118" className="hover:text-gray-400">
              (225) 555-0118
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope />
            <a
              href="mailto:michelle.rivera@example.com"
              className="hover:text-gray-400"
            >
              michelle.rivera@example.com
            </a>
          </div>
        </div>

        {/* Middle section with banner */}
        <div className="text-sm">Follow Us and get a chance to win 80% off</div>

        {/* Right section with social media links */}
        <div className="flex items-center space-x-4">
          <span>Follow Us:</span>
          <SocialButton platform="instagram" link="https://instagram.com" />
          <SocialButton platform="youtube" link="https://youtube.com" />
          <SocialButton platform="facebook" link="https://facebook.com" />
          <SocialButton platform="twitter" link="https://twitter.com" />
        </div>
      </div>
    </div>
  );
}
