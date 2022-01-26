import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CarCard(car) {
  return (
    <Card sx={{ maxWidth: 345, 
    margin: '1.5rem 1.5rem 1rem',
    borderTopLeftRadius: '1.5rem',
    borderTopRightRadius: '1.5rem',
    background: "black" }}>
      <CardMedia
        component="img"
        height="140"
        image={car.src}
        alt="car"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="white">
          {car.model}
        </Typography>
        <Typography variant="body2" color="white">
          {car.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
