import React from 'react';
import Hero from '../hero.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    backgroundDiv: {
        width: '100%',
        //minHeight:'400px',
        position: 'relative',
        fontSize: 'calc(2vh + 1vw)',
    },

    paragraphsAll: {
        textAlign: 'right',
        color: 'rgb(185, 19, 124)',
        position: 'absolute',
        right: '15px',
        bottom: '2vh'
    },
    img: {
        width: "100%",
        minHeight: '300px'
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
        fontSize: '2vh',
        borderRadius: '10px',
        "&:hover": {
            backgroundColor: "rgb(185, 19, 124, 0.7)"
        }


    }
});

export default function TopHero() {
    const classes = useStyles();
    return (
        <div className={classes.backgroundDiv}>
            <img src={Hero} className={classes.img} alt="eat cakes" />
            <div className={classes.paragraphsAll}>
                <div className={classes.paragraph}>Niech jedzą ciastka!</div>
                <br />
                <div className={classes.paragraph}>Cała Twoja rodzina, wszyscy przyjaciele i znajomi z pracy.</div>
                <br />
                <div className={classes.paragraph}>I niech myślą, że sam piekłeś!</div>
                <br />
                <Link to='./SignOn' style={{ textDecoration: 'none' }}>
                    <Button className={classes.btn}>Dołącz!</Button>
                </Link>
            </div>

        </div>
    )
}
