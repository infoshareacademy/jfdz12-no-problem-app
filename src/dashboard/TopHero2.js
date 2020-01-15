import React from 'react';
import Hero from '../hero.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    backgroundDiv: {
        width: '100vw',    
        position: 'relative',
        fontSize: '2vw'
    },
    
    paragraphsAll: {
        textAlign: 'right',
        color: 'rgb(185, 19, 124)', 
        position: 'absolute',
        right: '15px',
        bottom: '50px'
    },
    img: {
        width: "100vw"
    },
    paragraph: {
        backgroundColor: 'rgba(255,255,255, 0.7)',
        display: 'inline-block',
        marginBottom: '5px',
        marginRight: '15px',
        padding: '5px',
        borderRadius: '10px',
    },
    btn: {
        backgroundColor: 'rgb(185, 19, 124)',
        color: 'white',
        marginRight: '15px',
        fontSize: '1vw',
        borderRadius: '10px'
    }
  });

export default function TopHero2() {
    const classes = useStyles();
    return (
        <div className={classes.backgroundDiv}>
          
                    <img src={Hero} className={classes.img} alt="eat cakes"/>
                    <div className={classes.paragraphsAll}>
                        <div className={classes.paragraph}>Niech jedzą ciastka!</div>
                  <br/>
                        <div className={classes.paragraph}>Cała Twoja rodzina, wszyscy przyjaciele i znajomi z pracy.</div>
                  <br/>
                        <div className={classes.paragraph}>I niech myślą, że sam piekłeś!</div>
                <br/>
                    <Link to='./SignOn'>
                        <Button className={classes.btn}>Dołącz!</Button>
                    </Link>
             </div>
               
        </div>
    )
}
