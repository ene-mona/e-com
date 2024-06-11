import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, CardHeader,IconButton } from '@mui/material';
import Grid from '@mui/material';
const PhoneCard=({item})=> {
  return (
      <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <IconButton>
            <svg width="65" height="67" viewBox="0 0 65 67" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.427979 0.257202H44.0631C55.0798 0.257202 64.0107 9.188 64.0107 20.2047V66.3333H20.3755C9.35879 66.3333 0.427979 57.4025 0.427979 46.3858V0.257202Z" fill="#008ECC"/>
          50% OFF
          </svg>
          </IconButton>
        }
      />
      <CardActionArea>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div" >
          <img src={item.image} />
        </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
         Save {item.price}
        </Button>
      </CardActions>
    </Card>
  );
}

export default PhoneCard