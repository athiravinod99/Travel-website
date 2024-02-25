"use client"
import React from 'react';
import { Grid, Typography, Container } from "@mui/material";
import TravelCard from '../components/Card';
import styles from '../styles/main.module.scss';
import blogImg2 from '../public/Images/blogImg2.jpg';

const Blogs = () => {
  return (
    <Container className={styles.container} >
    <Typography variant="h5" className={styles.blog__heading}>EXPLORE RECENT BLOGS FROM TOP TRAVELLERS</Typography>
    <Grid container className={styles.container} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6} md={3}>
      <TravelCard title="Card Title" content="Card Content Goes Here" />
      </Grid>
      <Grid item xs={6} md={3}>
      <TravelCard  title="Card Title" content="Card Content Goes Here" />
      </Grid>
      <Grid item xs={6} md={3}>
      <TravelCard title="Card Title" content="Card Content Goes Here" />
      </Grid>
      <Grid item xs={6} md={3}>
      <TravelCard title="Card Title" content="Card Content Goes Here" />
      </Grid>
    </Grid>
    </Container>
  )
}

export default Blogs;
