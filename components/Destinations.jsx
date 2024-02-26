"use client";
import React, { useState } from "react";
import { Tabs, Tab, Paper, Box, Typography } from "@mui/material";
import Image from "next/image";
import styles from "../styles/components/destinations.module.scss";
import dashboardImg2 from "../public/Images/dashboardImg2.jpg";
import updatesImg2 from "../public/Images/updatesImg2.jpg";
import destinationImg2 from "../public/Images/destinationImg2.jpg";
import destinationImg0 from "../public/Images/destinationImg0.jpg";
import { Grid } from '@mui/material';
import map from "../public/Images/map.png";
import carImg from "../public/Images/carImg.png";
import MoreButton from "./MoreButton";

const Destinations = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const destinations = [
    {
      name: "Destination 1",
      imageUrl: updatesImg2,
    },
    {
      name: "Destination 2",
      imageUrl: dashboardImg2,
    },
    {
      name: "Destination 3",
      imageUrl: destinationImg2,
    },
    {
      name: "Destination 4",
      imageUrl: destinationImg0,
    },
    {
      name: "Destination 4",
      imageUrl: destinationImg0,
    },
    {
      name: "Destination 4",
      imageUrl: destinationImg0,
    },
    {
      name: "Destination 4",
      imageUrl: destinationImg0,
    },
    {
      name: "Destination 4",
      imageUrl: destinationImg0,
    },
    {
      name: "Destination 4",
      imageUrl: destinationImg0,
    },
    {
      name: "Destination 4",
      imageUrl: destinationImg0,
    },
    {
      name: "Destination 4",
      imageUrl: destinationImg0,
    },
  ];
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    // <div className={styles.destination} style={{backgroundImage: destinationImg0}}>
    //    <section>
    //     <Typography variant="h4" className={styles.heading}>
    //       DESTINATION GALLERY
    //     </Typography>
    //     <Typography variant="h5" className={styles.content}>
    //       Plan and book your perfect trip with expert advice, travel tips,
    //       destination information and inspiration from us.
    //     </Typography>
    //   </section>
    //   <div className={styles.imgContainer}>
    //     <div className={styles.imageContainer}>
    //       <Image
    //         src={destinations[selectedTab].imageUrl}
    //         alt={destinations[selectedTab].name}
    //         layout="fill"
    //         objectFit="cover"
    //       />
    //       <Box className={styles.destination__details}>
    //         <Typography variant="h3" className={styles.destination__name}>
    //           {destinations[selectedTab].name}
    //         </Typography>
    //         <div className={styles.cardContainer}>
    //           <div className={styles.card__weather}>
    //             <p className={styles.city}>PINK CITY</p>
    //             <p className={styles.weather}>PARTLY CLOUDY</p>
    //             <p className={styles.temp}>32°</p>
    //             <div className={styles.minmaxContainer}>
    //               <div className={styles.min}>
    //                 <p className={styles.minHeading}>Min</p>
    //                 <p className={styles.minTemp}>30°</p>
    //               </div>
    //               <div className={styles.max}>
    //                 <p className={styles.maxHeading}>Max</p>
    //                 <p className={styles.maxTemp}>32°</p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </Box>
    //     </div>
    //     <Paper square>
    //       <Tabs
    //         value={selectedTab}
    //         indicatorColor="primary"
    //         textColor="primary"
    //         onChange={handleChange}
    //         aria-label="popular destinations tabs"
    //         variant="scrollable"
    //         scrollButtons="auto"
    //       >
    //         {destinations.map((destination, index) => (
    //           <Tab key={index} label={destination.name} />
    //         ))}
    //       </Tabs>
    //     </Paper>
    //   </div>
    // </div>
    <>
        <Typography variant="h4" className={styles.heading}>DESTINATION GALLERY</Typography>
    <div className={styles.container}>
    <Image
      src={map}
      alt="Background Image"
      layout="fill"
      objectFit="cover"
    />
    <div className={styles.content}>
      <Grid container spacing={2}>
      <Grid item xs={6}>
          <div className={styles.item}><div className={styles.item__img}> 
          <div className={styles.polaroid}>  
          <img src={destinationImg2.src} alt="Polaroid" className={styles.polaroid} />
          <Typography variant="caption" className={styles.caption}>India</Typography></div>
          </div></div>
        </Grid>
        <Grid item xs={6}>
          <div className={styles.item__img}> 
          <div className={styles.polaroid}>  
          <img src={destinationImg2.src} alt="Polaroid" className={styles.polaroid} />
          <Typography variant="caption" className={styles.caption}>USA</Typography></div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className={styles.item}>
          <div className={styles.item__img}> 
          <div className={styles.polaroid}>  
          <img src={destinationImg2.src} alt="Polaroid" className={styles.polaroid} />
          <Typography variant="caption" className={styles.caption}>London</Typography></div>
          </div><img src={carImg.src} alt="Polaroid" className={styles.car} /> </div>
        </Grid>
        <Grid item xs={6}>
          <div className={styles.item__title}> Plan and book your perfect trip with expert advice, travel tips,
         destination information and inspiration from us.
         </div>
        </Grid>
      </Grid>
    </div>
  </div>
  </>
  );
};

export default Destinations;
