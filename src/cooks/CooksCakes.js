import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
   
  });

export default function CooksCakes(props) {

const classes = useStyles();

return (
      <Card className={classes.root} component={Link} to={`/cake/${props.cake.id}`} style={{textDecoration:'none'}}>
        <CardMedia
          className={classes.media}
          image={props.cake.imgURL}
         
          title={props.cake.name}
                />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.cake.name}
          </Typography>
        </CardContent>
      </Card>
    )
}
