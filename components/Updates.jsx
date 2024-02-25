import React from 'react'
import updatesImg1 from "../public/Images/updatesImg1.jpg"
import updatesImg2 from "../public/Images/updatesImg2.jpg"
import CarouselAnimation from './CarouselAnimation';
import CarouselSlide from './CarouselSlide';

const Updates = () => {
  const cards = [
    { imgSrc: "https://via.placeholder.com/400x300", alt: "Card 1", description: "Description for Card 1" , buttonLabel: "Learn More"},
    { imgSrc: "https://via.placeholder.com/400x300", alt: "Card 2", description: "Description for Card 2" , buttonLabel: "Learn More"},
    { imgSrc: "https://via.placeholder.com/400x300", alt: "Card 3", description: "Description for Card 3" ,buttonLabel: "Learn More" }
  ];

  const slides = [
    {
      image: updatesImg1,
      caption: 'Experience the enchantment of a lifetime as natures masterpiece unfolds before your eyes with the mesmerizing dance of the Northern Lights',
    },
    {
      image: updatesImg2,
      caption: 'Description for Image 2',
    },
    {
      image: updatesImg2,
      caption: 'Description for Image 3',
    },
    {
      image: updatesImg2,
      caption: 'Description for Image 4',
    },
    {
      image: updatesImg2,
      caption: 'Description for Image 5',
    },
  ];
  return (
    <section style={{ padding: "100px"}}>
        <h5>Ignite Your Wanderlust: Uncover Our Latest Travel Gems!</h5>
        <CarouselSlide slides={slides} itemsPerSlide={3}/>
    </section>
  )
}

export default Updates