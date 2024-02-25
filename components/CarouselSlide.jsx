"use client"
import React, { useState, useEffect } from 'react';
import styles from "../styles/components/carousel-animation.module.scss";
import { Grid } from '@mui/material';

const Carousel = ({ slides = [], itemsPerSlide  }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlideGroup, setCurrentSlideGroup] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % Math.ceil(slides.length / itemsPerSlide));
    }, 5000); 

    return () => clearInterval(interval);
  }, [slides.length, itemsPerSlide]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const renderSlides = () => {
    const slideGroups = [];
    for (let i = 0; i < slides.length; i += itemsPerSlide) {
      slideGroups.push(slides.slice(i, i + itemsPerSlide));
    }
    return slideGroups.map((group, index) => (
      <div
        key={index}
        className={`${styles.carouselSlide} ${
          index === currentSlide ? styles.active : ''
        }`}
      >
        {group.map((slide, idx) => (
          <div key={idx} className={styles.slideItem}>
            <img src={slide.image.src} alt={slide.caption} className={styles.carouselImage} />
            <div className={styles.carouselCaption}>{slide.caption}</div>
          </div>
        ))}
      </div>
    ));
  };

  const renderDots = () => {
    return Array.from({ length: Math.ceil(slides.length / itemsPerSlide) }, (_, index) => (
      <span
        key={index}
        className={`${styles.dot} ${
          index === currentSlideGroup ? styles.activeDot : ''
        }`}
        onClick={() => handleDotClick(index)}
      />
    ));
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselSlides}>
        {renderSlides()}
      </div>
     
      <div className={styles.carouselDots}>
        {/* {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              Math.floor(index / itemsPerSlide) === currentSlide ? styles.activeDot : ''
            }`}
            onClick={() => handleDotClick(Math.floor(index / itemsPerSlide))}
          />
        ))} */}
        {renderDots()}
      </div>
    </div>
  );
};

export default Carousel;
