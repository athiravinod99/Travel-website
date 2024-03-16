/* 
* Carousel animation component
*/

"use client"
import React, { useState, useEffect } from "react";
import styles from "../styles/components/carousel-animation.module.scss";

const CarouselAnimation = ({ content = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === content.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change the interval time as needed

    return () => clearInterval(intervalId);
  }, [content.length]);

  useEffect(() => {
    const repeatFirstItem = () => {
      if (currentIndex === content.length - 1) {
        setTimeout(() => {
          setCurrentIndex(0);
        }, 500); // Adjust timeout as needed
      }
    };

    repeatFirstItem();

    return () => clearTimeout();
  }, [currentIndex, content.length]);

  return (
    <div className={styles.slider}>
      <div className={styles.slide_track} style={{ transform: `translateX(-${currentIndex * (100 / content.length)}%)`, transition: "transform 0.5s ease-in-out" }}>
        {content.map((item, index) => (
          <div key={index} className={styles.slide} style={{ marginBottom: "20px", textAlign: "center", display: "flex", border: "1px solid #ccc", borderRadius: "8px", padding: "10px" }}>
            <img src={item.imgSrc} alt="Image" height={100} width={60} style={{ marginBottom: "10px" }} />
            <p style={{ marginBottom: "0" }}>{item.description}</p>
            <button style={{ marginBottom: "10px" }}>{item.buttonLabel}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselAnimation;
