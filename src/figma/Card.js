import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';



export default function CustomCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    
  };

  return (
    <Card sx={{ width: '220px' ,height:'182px',m:'16px',boxShadow:'none'}}>
     
      <CardMedia
        component="img"
        height="130"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS1V1whlcJX8efFu_gExBYWzlGE4eoNSb6ze0hub8EfQ&usqp=CAU&ec=48600113"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" >
          This impressive paella is a perfect party dish and a fun meal to cook
          if you like.
        </Typography>
      </CardContent>
      
         
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          
         
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
