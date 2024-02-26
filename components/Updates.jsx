import React from 'react'
import destinationImg1 from "../public/Images/destinationImg1.jpg"
import updatesImg1 from "../public/Images/updatesImg1.jpg"
import CarouselAnimation from './CarouselAnimation';
import CarouselSlide from './CarouselSlide';
import { Typography } from '@mui/material';
import styles from "../styles/components/update.module.scss";
import blogImg3 from "../public/Images/blogImg3.jpg"

const Updates = () => {

  const slides = [
    {
      image: updatesImg1,
      title: 'Northern Lights',
      caption: 'Experience the enchantment of a lifetime as natures masterpiece unfolds before your eyes with the mesmerizing dance of the Northern Lights',
    },
    {
      image: destinationImg1,
      title: 'Northern Lights',
      caption: 'Experience the enchantment of a lifetime as natures masterpiece unfolds before your eyes with the mesmerizing dance of the Northern Lights',
    },
    {
      image: blogImg3,
      title: 'Northern Lights',
      caption: 'Experience the enchantment of a lifetime as natures masterpiece unfolds before your eyes with the mesmerizing dance of the Northern Lights',
    },
    {
      image: updatesImg1,
      title: 'Northern Lights',
      caption: 'Experience the enchantment of a lifetime as natures masterpiece unfolds before your eyes with the mesmerizing dance of the Northern Lights',
    },
    {
      image: destinationImg1,
      title: 'Northern Lights',
      caption: 'Experience the enchantment of a lifetime as natures masterpiece unfolds before your eyes with the mesmerizing dance of the Northern Lights',
    },
    {
      image: blogImg3,
      title: 'Northern Lights',
      caption: 'Experience the enchantment of a lifetime as natures masterpiece unfolds before your eyes with the mesmerizing dance of the Northern Lights',
    },
  ];
  return (
    <section className={styles.container}>
        <Typography variant='h5' className={styles.heading}>Ignite Your Wanderlust: Uncover Our Latest Travel Gems!</Typography>
        <CarouselSlide slides={slides} itemsPerSlide={3}/>
    </section>
  )
}

export default Updates