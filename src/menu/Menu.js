import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

export function Menu(){
    return (
        <div>
            <Grid container 
                    item
                    xs={12}
                    spacing={2} 
                    justify='center' 
                    alignContent='center'
                    style={{margin: '10px', padding: '10px'}}
            >
                <Paper style={{width: '600px'}}> 
                    <Typography variant='h2'> Menu </Typography> 
                </Paper>
            </Grid>

        </div>

    )

}
