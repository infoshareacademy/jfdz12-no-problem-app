import React from 'react';
import { Grid, Paper, Typography, Divider, makeStyles } from '@material-ui/core';
import { UserCakeDataImg } from './userCakeDataComponent/UserCakeDataImg';
import { UserCakeDataBasic } from './userCakeDataComponent/UserCakeDataBasic';
import { UserCakeDataExtend } from './userCakeDataComponent/UserCakeDataExtend';
import { UserCakeDataButtons } from './userCakeDataComponent/UserCakeDataButtons';

const useStyles = makeStyles({
    img: {
        width: '100%',
        maxWidth: '100px',
        height: '70px',
    },
    grid: {
        padding: '5px',
    },
    text: {
        paddingLeft: '10px',
        textAlign: 'left',
    },

    wrapper: {
        width: '100%',
    },
    avatar: {
        fontSize: '10px',
        fontWeight: 'bold',
        width: 60,
        height: 20,
        marginLeft: '10px',
    }
});

export function UserCakeData(props) {

    const { cakes } = props;
    const classes = useStyles(); 

    return (
        <Paper >
            <Typography variant='h6'>Twoje ciasta</Typography>

            <Grid container >
                {cakes.map((cake, idx) => {
                    const backColor = idx % 2 === 0 ? '#fce4ec50' : '';
                    
                    return (<div key={cake.id} className={classes.wrapper}>
                                <Grid item xs={12}>
                                    <Divider />
                                </Grid>
                                <Grid xs container item
                                    className={classes.grid}
                                    style={{ backgroundColor: backColor }}
                                >
                                    <UserCakeDataImg
                                        cake={cake}
                                    />

                                    <Grid item xs
                                        container
                                        direction='row'
                                        alignItems='flex-start'
                                        wrap='wrap'
                                    >
                                        <UserCakeDataBasic
                                            cake={cake}
                                        />
                                        <UserCakeDataExtend
                                            cake={cake}
                                        />
                                        
                                        <UserCakeDataButtons 
                                            cake={cake}
                                        />
                                    </Grid>
                                </Grid>

                            </div>)
                        })}
        
            </Grid>
        </Paper>

    )
}

