import React from 'react'
import updatesImg1 from "../public/Images/updatesImg1.jpg"
import updatesImg2 from "../public/Images/updatesImg2.jpg"
import CarouselAnimation from './CarouselAnimation'

const Updates = () => {
  const cards = [
    { imageUrl: "https://via.placeholder.com/400x300", title: "Card 1", description: "Description for Card 1" },
    { imageUrl: "https://via.placeholder.com/400x300", title: "Card 2", description: "Description for Card 2" },
    { imageUrl: "https://via.placeholder.com/400x300", title: "Card 3", description: "Description for Card 3" }
  ];
  return (
    <section style={{ padding: "100px"}}>
        <h5>Ignite Your Wanderlust: Uncover Our Latest Travel Gems!</h5>
    <div>
    <div>
        <img src={updatesImg2.src} alt="Image 2"  />
        <p>Experience the enchantment of a lifetime as nature's masterpiece unfolds before your eyes with the mesmerizing dance of the Northern Lights.</p>
        <button >Button 2</button>
      </div>
      <div >
        <img src={updatesImg2.src} alt="Image 2"/>
        <p>Experience the enchantment of a lifetime as nature's masterpiece unfolds before your eyes with the mesmerizing dance of the Northern Lights.</p>
        <button >Button 2</button>
      </div>
      <div >
        <img src={updatesImg2.src} alt="Image 2"  />
        <p>Experience the enchantment of a lifetime as nature's masterpiece unfolds before your eyes with the mesmerizing dance of the Northern Lights.</p>
        <button >Button 2</button>
      </div>
    </div>
    </section>
  )
}

export default Updates