/* 
* Card component
*/

import React from 'react';
import { Card, CardContent, Typography,CardMedia, CardActions,Button} from '@mui/material';
import blogImg2 from '../public/Images/blogImg2.jpg'; 
import MoreButton from './MoreButton';

import styles from "../styles/components/cards.module.scss"

const TravelCard = ({ title, content }) => {
  return (
    <Card className={styles.main__card}>
    <Card sx={{ maxWidth: 345 }} className={styles.card}>
      <CardMedia 
      component="img"
        height="140"
        image={blogImg2.src}
        alt="Card Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <MoreButton buttonText="Read More" />
      </CardActions>
    </Card>
    </Card>
  );
};

export default TravelCard;
