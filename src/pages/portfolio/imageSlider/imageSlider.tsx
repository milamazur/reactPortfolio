import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import './imageSlider.css';

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
        <button className="arrow-left" onClick={prevSlide}><AiOutlineLeft /></button>
        <img src={projects[currentSlide]} alt={`slide ${currentSlide}`} />
        <button className="arrow-right" onClick={nextSlide}><AiOutlineRight /></button>
      </div>
    );
  };
  
  export default ImageSlider;
  