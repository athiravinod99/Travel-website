/*
 * Destination page
 */

"use client";

import TravelCard from "@/components/Card";
import Navbar from "@/components/Navbar";
import React from "react";
import { Grid, Typography, Container, Box, Paper, Card, CardContent } from "@mui/material";
import styles from "./styles.module.scss";
import TravelSearch from "@/components/TravelSearch";
import Rajsthan from "../../public/Images/Rajsthan.jpg";
import mountain from "../../public/Images/mountain.jpg";
import beach from "../../public/Images/beach.jpg";
import monuments from "../../public/Images/monuments.jpg";
import party from "../../public/Images/party.jpg";
import cultural from "../../public/Images/cultural.jpg";
import adventure from "../../public/Images/adventure.jpg";

import Image from "next/image";

const page = () => {

  const data = [
    {
      imgSrc: mountain.src ,
      title: 'Mountains',
    },
    {
      imgSrc: beach.src ,
      title: 'Beaches',
    },
    {
      imgSrc: monuments.src,
      title: 'Monuments',
    },
    {
      imgSrc: adventure.src,
      title: 'Adventure',
    },
    {
      imgSrc: cultural.src,
      title: 'Cultural',
    },
    {
      imgSrc: party.src,
      title: 'Party',
    },
  ];
  
  
  return (
    <>
    {/* section1  */}
      <Container className={styles.container}>
        <Navbar className={{ navbarWrapper: styles.navbarWrapper }} />
          {/* section2  */}

      <Grid
        container
        className={styles.destinationDetails}
        rowSpacing={1}
        style={{
          backgroundImage: `url(${Rajsthan.src})`,
          backgroundSize: "cover",
        }}
        // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={6}>
          <Box>
            <TravelSearch
              variant="outlined"
              label="Search Destinations"
              className={styles.travelSearch}
            />
            <Typography variant="h3" className={styles.destination__name}>
              Welcome to CITY OF LAKES
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box className={styles.destinationDetails}>
            <Typography variant="h3" className={styles.destination__name}>
              UDAIPUR
            </Typography>
            <div className={styles.cardContainer}>
              <div className={styles.card__weather}>
                <p className={styles.city}>PINK CITY</p>
                <p className={styles.weather}>PARTLY CLOUDY</p>
                <p className={styles.temp}>32°</p>
                <div className={styles.minmaxContainer}>
                  <div className={styles.min}>
                    <p className={styles.minHeading}>Min</p>
                    <p className={styles.minTemp}>30°</p>
                  </div>
                  <div className={styles.max}>
                    <p className={styles.maxHeading}>Max</p>
                    <p className={styles.maxTemp}>32°</p>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Grid>
      </Grid>
          {/* section3 */}
          <Grid container spacing={2}>
            <Typography variant="h4" className={styles.title}>Little confused?... We will help you</Typography>
      {data.map((item, index) => (
        <Grid item xs={12} sm={2} key={index}>
          <Card className={styles.card}>
            <img src={item.imgSrc} alt={`Image ${index + 1}`} className={styles.card_img} />
            <CardContent className={styles.text_overlay}>
              <Typography variant="h5" component="h2">
                {item.title}
              </Typography>
              <Typography variant="body2" component="p">
                {item.content}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
      </Container>

    </>
  );
};

export default page;
