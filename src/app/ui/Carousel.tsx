import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  buttonLabel: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: '/images/1.jpg',
    title: 'NEW COLLECTION',
    subtitle:
      'We know how large objects will act, but things on a small scale.',
    buttonLabel: 'SHOP NOW',
  },
  // плейсхолдер
];

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    const newIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);
  };

  const handleNextSlide = () => {
    const newIndex = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg">
      {/* Слайд */}
      <div className="relative h-[500px] flex items-center">
        <Image
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-lg object-cover"
        />
        <div className="absolute left-8 top-1/3 text-white space-y-4">
          <h4 className="text-sm font-light uppercase">Summer 2020</h4>
          <h2 className="text-4xl font-bold">{slides[currentSlide].title}</h2>
          <p className="text-base max-w-sm">{slides[currentSlide].subtitle}</p>
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
            {slides[currentSlide].buttonLabel}
          </button>
        </div>
      </div>

      {/* Стрелки навигации */}
      <button
        onClick={handlePrevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
      >
        <FaArrowLeft className="text-gray-800" />
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
      >
        <FaArrowRight className="text-gray-800" />
      </button>

      {/* Индикаторы слайдов */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-400'} cursor-pointer`}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
