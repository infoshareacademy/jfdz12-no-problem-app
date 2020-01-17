import React, { Component } from 'react'
import ChartPie from './ChartPie'
import ChartLine from './ChartLine'
import Grid from '@material-ui/core/Grid';

export default class ChartsGrid extends Component {
    render() {
        return (
            <div>
                <Grid container>
                    <Grid item 
                        xs={12} 
                        s={12}
                        md={5}
                        lg={4}>
                    
                        <ChartPie />
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
}
