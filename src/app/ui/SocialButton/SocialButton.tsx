import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from 'react-icons/fa';
import { IconType } from 'react-icons'; // Импортируем IconType из 'react-icons'

interface SocialButtonProps {
  platform: 'instagram' | 'youtube' | 'facebook' | 'twitter'; // Указываем возможные значения платформ
  link: string; // Ссылка на профиль
}

const socialIcons: Record<SocialButtonProps['platform'], IconType> = {
  instagram: FaInstagram,
  youtube: FaYoutube,
  facebook: FaFacebook,
  twitter: FaTwitter,
};

const SocialButton: React.FC<SocialButtonProps> = ({ platform, link }) => {
  const IconComponent = socialIcons[platform];

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-12 h-12 bg-white text-gray-800 rounded-full hover:bg-gray-200 transition duration-300"
    >
      <IconComponent className="w-6 h-6" />
    </a>
  );
};

export default SocialButton;
