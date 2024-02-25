// components/Card.js
import React from 'react';
import { Card, CardContent, Typography,CardMedia, CardActions,Button} from '@mui/material';
import blogImg2 from '../public/Images/blogImg2.jpg'; 

const TravelCard = ({ title, content }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
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
        <Button size="small">Read More</Button>
      </CardActions>
    </Card>
  );
};

export default TravelCard;
