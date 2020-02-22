import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FaceIcon from '@material-ui/icons/Face';
import CakeIcon from '@material-ui/icons/Cake';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import RoomIcon from '@material-ui/icons/Room';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    backgroundDiv: {
        backgroundColor: 'rgb(185, 19, 124, 0.6)',
        color: 'white',
        fontSize: '25px',
        paddingTop: '15px',
        paddingBottom: '20px'
    },
    icon: {
        color: 'white',
        fontSize: '60px',
    },
    divGridItem: {
        paddingTop: '1vw',
        paddingBottom: '3vw',
    }
  
   
  });

export default function NumberStats(props) {
    const classes = useStyles();
    const { dataAmount } = props;

    const usersStat = (
        <div className={classes.divGridItem}>
            <div>
                <FaceIcon className={classes.icon}/>
            </div>
            <div>
                {dataAmount.amountUsers} użytkowników
            </div>
        </div>
    );

    const cooksStat = (
        <div className={classes.divGridItem}>
            <div>
                <EmojiPeopleIcon className={classes.icon}/>
            </div>
            <div>
                {dataAmount.amountCooks} cukierników
            </div>
        </div>
    );

    const cakesStat = (
        <div className={classes.divGridItem}>
            <div>
                <CakeIcon className={classes.icon}/>
            </div>
            <div>
                {dataAmount.amountCakes} ciast w ofercie
            </div>
        </div>
    );

    const citiesStat = (
        <div className={classes.divGridItem}>
        <div>
            <RoomIcon className={classes.icon}/>
        </div>
        <div>
            {dataAmount.amoutOfCity} różnych miast
        </div>
    </div>
    )

    return (
        <Grid container
            className={classes.backgroundDiv}
            >
           <Grid item lg={12} sm={12} xs={12}>
                <h3 style={{paddingBottom: '0.5vw'}}>Nasza aplikacja to:</h3>
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
                    {usersStat}
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
                    {cooksStat}
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
                    {cakesStat}
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
                    {citiesStat}
            </Grid>
       </Grid>
    )
}
