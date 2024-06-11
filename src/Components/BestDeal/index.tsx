import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from '@mui/material/Typography';
import { CardHeader, Grid, IconButton } from '@mui/material';

const MediaCard=({item})=> {
  return (
    <Grid item>
      <Card sx={{
        backgroundColor: `${item.bgColor}`,
      }}>
        <CardHeader
        action={
          <IconButton>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Favorite">
              <path id="Vector 15" d="M2.96712 9.27213L7.6022 13.6263C7.65404 13.675 7.67996 13.6993 7.70464 13.7174C7.8805 13.8462 8.11951 13.8462 8.29537 13.7174C8.32005 13.6993 8.34597 13.675 8.39781 13.6263L13.0329 9.27213C14.337 8.04705 14.4954 6.03106 13.3985 4.61737L13.1923 4.35155C11.8802 2.66038 9.24642 2.944 8.32445 4.87576C8.19421 5.14863 7.80579 5.14863 7.67556 4.87576C6.75358 2.944 4.11982 2.66038 2.8077 4.35155L2.60146 4.61737C1.50464 6.03106 1.66301 8.04705 2.96712 9.27213Z" stroke="#5F5F5F" stroke-width="2"/>
              </g>
            </svg>
          </IconButton>
        }
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" >
          <img src={item.image} />
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          colors
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {item.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {item.price}
        </Typography>
      </CardContent>
      
    </Card>
    </Grid>
  );
}

export default MediaCard;