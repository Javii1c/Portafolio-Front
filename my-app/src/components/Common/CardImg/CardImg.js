import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './Card.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    width : '170px!important',
    height : 170,
    
  },
  media: {
    margin :'auto',
    width : 170,
    height: 170,
    display: 'table'
  },
});

export default function CardImg(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea >
        <CardMedia
          className={classes.media}
          image={props.image}
          title= {props.name}
        />
        <CardContent style = {{ width : 170}}>
          <Typography gutterBottom variant="body1" component="p">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {props.contact}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {props.rol}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
