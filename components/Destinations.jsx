"use client"
import React, { useState } from 'react';
import { Tabs, Tab, Paper, Box, Typography } from '@mui/material';
import Image from 'next/image';
import styles from '../styles/components/destinations.module.scss';
import dashboardImg2 from "../public/Images/dashboardImg2.jpg"
import updatesImg2 from "../public/Images/updatesImg2.jpg"
import destinationImg2 from "../public/Images/destinationImg2.jpg"
import destinationImg0 from "../public/Images/destinationImg0.jpg"


const Destinations = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const destinations = [
    {
      name: 'Destination 1',
      imageUrl: updatesImg2,
    },
    {
      name: 'Destination 2',
      imageUrl: dashboardImg2,
    },
    {
      name: 'Destination 3',
      imageUrl: destinationImg2,
    },
    {
      name: 'Destination 4',
      imageUrl: destinationImg0,
    },
    {
      name: 'Destination 4',
      imageUrl: destinationImg0,
    },
    {
      name: 'Destination 4',
      imageUrl: destinationImg0,
    },
    {
      name: 'Destination 4',
      imageUrl: destinationImg0,
    },
    {
      name: 'Destination 4',
      imageUrl: destinationImg0,
    },
    {
      name: 'Destination 4',
      imageUrl: destinationImg0,
    },
    {
      name: 'Destination 4',
      imageUrl: destinationImg0,
    },
    {
      name: 'Destination 4',
      imageUrl: destinationImg0,
    },
  ];
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div  className={styles.destination}>
    <section >
  <Typography>Destination Gallery</Typography>
  <Typography>Plan and book your perfect trip with expert advice, travel tips, destination information and inspiration from us.
</Typography>
</section>

    <div className={styles.imgContainer}>
      <div className={styles.imageContainer}>
        <Image
          src={destinations[selectedTab].imageUrl}
          alt={destinations[selectedTab].name}
          layout="fill"
          objectFit="cover"
        />  
        <Typography className={styles.destination__name}>{destinations[selectedTab].name}</Typography>
      </div>
      <Paper square>
        <Tabs
          value={selectedTab}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="popular destinations tabs"
          variant="scrollable"
          scrollButtons="auto"
        >
          {destinations.map((destination, index) => (
            <Tab key={index} label={destination.name} />
          ))}
        </Tabs>
      </Paper>
    </div>
    </div>
  );
};

export default Destinations;
