import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Grid, Box, Avatar, } from '@material-ui/core';

const useStyles = makeStyles({
    grid: {
        padding: '5px',
    },
    text: {
        paddingLeft: '10px',
        textAlign: 'left',
    },
    avatar: {
        fontSize: '10px',
        fontWeight: 'bold',
        width: 60,
        height: 20,
        marginLeft: '10px',
    },
})


export function UserCakeDataBasic(props) {
    const { cake } = props;
    const classes = useStyles();

    return (<>
        <Grid item
            container
            justify='space-between'
            alignContent='flex-start'
            direction='column'
            xs={12} md={6}
            wrap='wrap'
            style={{ minWidth: '200px' }}
        >
            <Grid item container alignItems='flex-start' direction='column'>
                <Grid item container
                    alignItems='center'
                    justify='flex-start'
                    className={classes.grid}
                >
                    <div className={classes.text}>
                        <span>ciasto: </span>
                        <Box component='span' fontWeight={500} >
                            {cake.name}
                        </Box>
                    </div>
                </Grid>
                <Grid item container
                    alignItems='center'
                    justify='flex-start'
                    className={classes.grid}
                >
                    <div className={classes.text}>
                        opis: {cake.description}
                    </div>

                </Grid>
                <Grid container alignItems='center' className={classes.grid}>
                    <div className={classes.text}>typ ciasta: </div>
                    <Avatar
                        conponent='span'
                        variant="rounded"
                        className={classes.avatar}
                        style={{ backgroundColor: cake.type.color }}
                    >
                        <div >{cake.type.name}</div>
                    </Avatar>
                </Grid>
            </Grid >
        </Grid>
    </>)
}

