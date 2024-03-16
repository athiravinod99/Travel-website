/* 
* carousel slide component
*/

"use client"
import React, { useState, useEffect } from 'react';
import styles from "../styles/components/carousel-animation.module.scss";
import { Grid, Card, CardContent, Box, Typography, CardMedia } from '@mui/material';

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
            style={{ transform: `translateX(-${currentSlide * (100 / itemsPerSlide)}%)` }}
          >

        {group.map((slide, idx) => (
          <div key={idx} className={styles.slideItem}>
            <Card className={styles.card}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6" className={slide.caption}>
           {slide.title}
          </Typography>
          <Typography variant="body1" component="div" className={slide.content}>
            {slide.caption}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151, height: "25vh !important", padding: 2 }}
        image={slide.image.src}
        alt="Live from space album cover"
      />
    </Card>
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
        {renderDots()}
      </div>
    </div>
  );
};

export default Carousel;
