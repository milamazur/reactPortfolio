import { useState } from "react";

interface ImageSliderProps {
    projects: string[];
  }
  
  const ImageSlider: React.FC<ImageSliderProps> = ({ projects }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % projects.length);
    };
  
    const prevSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + projects.length) % projects.length);
    };
  
    return (
      <div className="slider">
        <button onClick={prevSlide}>&lt;</button>
        <img src={projects[currentSlide]} alt={`slide ${currentSlide}`} />
        <button onClick={nextSlide}>&gt;</button>
      </div>
    );
  };
  
  export default ImageSlider;
  