import React from 'react'
import ChartPie from './ChartPie'
import ChartLine from './ChartLine'
import Grid from '@material-ui/core/Grid';

export default function ChartsGrid(props) {
    return (
        <div>
            <Grid container>
                <Grid item 
                    xs={12} 
                    s={12}
                    md={5}
                    lg={4}>
                
                    <ChartPie 
                        first3City = {props.first3City}
                        otherSum = {props.otherSum}
                    />
                </Grid>

                <Grid item
                    xs={12} 
                    s={12}
                    md={7}
                    lg={8}
                >
                    <ChartLine />
                </Grid>
            </Grid>
        </div>
    )
}
