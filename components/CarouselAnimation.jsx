"use client";
import { useState } from "react";
import styles from "../styles/components/carousel-nimation.module.scss";
import updatesImg1 from "../public/Images/updatesImg1.jpg"
import updatesImg2 from "../public/Images/updatesImg2.jpg"

const CarouselAnimation = () => {
  return (
    <>
    <div className={styles.slider}>
      <div class={styles.slide_track}>
      <div className={styles.slide} style={{ marginBottom: "20px", textAlign: "center", margin: "0px 20px" }}>
        <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "10px" }}>
            <img src={updatesImg2.src} alt="Image 2" height={100} width={60} style={{ marginBottom: "10px" }} />
            <p style={{ marginBottom: "0" }}>Experience the enchantment of a lifetime as nature's masterpiece unfolds before your eyes with the mesmerizing dance of the Northern Lights.</p>
            <button style={{ marginBottom: "10px" }}>Button 2</button>
        </div>
    </div>
    <div className={styles.slide} style={{ marginBottom: "20px", textAlign: "center" }}>
        <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "10px" }}>
            <img src={updatesImg2.src} alt="Image 2" height={100} width={60} style={{ marginBottom: "10px" }} />
            <p style={{ marginBottom: "0" }}>Experience the enchantment of a lifetime as nature's masterpiece unfolds before your eyes with the mesmerizing dance of the Northern Lights.</p>
            <button style={{ marginBottom: "10px" }}>Button 2</button>
        </div>
    </div>
    <div className={styles.slide} style={{ marginBottom: "20px", textAlign: "center" }}>
        <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "10px" }}>
            <img src={updatesImg2.src} alt="Image 2" height={100} width={60} style={{ marginBottom: "10px" }} />
            <p style={{ marginBottom: "0" }}>Experience the enchantment of a lifetime as nature's masterpiece unfolds before your eyes with the mesmerizing dance of the Northern Lights.</p>
            <button style={{ marginBottom: "10px" }}>Button 2</button>
        </div>
    </div>
      </div>
    </div>
    </>
  );
};

export default CarouselAnimation;
