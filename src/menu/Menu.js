import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

export function Menu(){
    return (
        <div>
            <Grid container 
                    item
                    justify='center' 
                    alignContent='center'
                    style={{margin: '10px 0px', padding: '10px'}}
            >
                <Paper style={{width: '600px'}}> 
                    <Typography variant='h3'> Menu </Typography> 
                </Paper>
            </Grid>

        </div>

    )

}
