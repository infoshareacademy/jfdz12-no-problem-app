import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Grid, Box, } from '@material-ui/core';

const useStyles = makeStyles({
    grid: {
        padding: '5px',
    },
    text: {
        paddingLeft: '10px',
        textAlign: 'left',
    },
})


export function UserCakeDataExtend(props) {
    const { cake } = props;
    const classes = useStyles();

    return (<>
        <Grid item
            container
            justify='space-between'
            alignContent='flex-start'
            direction='column'
            xs={12} md={5}
            wrap='wrap'
        >
            <Grid item container
                alignItems='center'
                justify='flex-start'
                className={classes.grid}
            >
                <div className={classes.text}>
                    <span>cena za kg: </span>
                    <Box component='span' fontWeight={500} >
                        {cake.price}
                    </Box>
                </div>
            </Grid>
            <Grid item container
                alignItems='center'
                justify='flex-start'
                className={classes.grid}
            >
                <div className={classes.text}>
                    cena za porcję: {cake.priceForPortion}
                </div>

            </Grid>
            <Grid item container
                alignItems='center'
                justify='flex-start'
                className={classes.grid}
            >
                <div className={classes.text}>
                    porcja: {cake.portionDescription}
                </div>

            </Grid>
        </Grid>
    </>)
}

