import React from 'react';
import BackgroundCake from '../backgroundCakeTwo.jpg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    backgroundDiv: {
       
      
       
        position: 'relative',
       
      
        flexDirection: 'column',
        flexWrap: "nowrap",
        display: 'flex',
        justifyContent: "flex-end",
        alignItems: 'flex-end',
        color: 'rgb(185, 19, 124)', 
        fontSize: '2em', 
        textAlign: 'right'

    },
    
    paragraph: {
        backgroundColor: 'rgba(255,255,255, 0.7)', 
        padding: '5px', 
        borderRadius: '5px',
        alignSelf: "right",
        margin: '5px',
        marginRight: '15px',
        marginBottom: '-15px'
       
    },
    img: {
        width: '100vw'
    }
  
  });

export default function NumberStats() {
    const classes = useStyles();
    return (
        <div className={classes.backgroundDiv}>
            <img src={BackgroundCake} alt="cake" className={classes.img} />
           <div className={classes.paragraph}>

           </div>
        </div>
    )
}
