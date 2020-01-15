import React from 'react';
import Hero from '../hero.jpg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    backgroundDiv: {
        backgroundImage:`url(${Hero})`, 
        backgroundSize: ' cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '650px',
        backgroundPosition: 'center',
       
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
  
  });

export default function TopHero() {
    const classes = useStyles();
    return (
        <div className={classes.backgroundDiv}>
          
               
                    <div className={classes.paragraph}>Niech jedzą ciastka!</div>
                    <br/>
                    <div className={classes.paragraph}>Cała Twoja rodzina, wszyscy przyjaciele i znajomi z pracy.</div>
                    <br/>
                    <div className={classes.paragraph} style={{marginBottom: '15px'}}>I niech myślą, że sam piekłeś!</div>
             
               
        </div>
    )
}
