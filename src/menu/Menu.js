import React from 'react';
import { FilterVisibleToogle} from './FilterVisibleToogle';
import { Grid, Paper, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export class Menu extends React.Component{
    constructor(props){
        super(props);
        this.handleFilterVisibility = this.handleFilterVisibility.bind(this);
    }

    handleFilterVisibility (){
        this.props.onHandleFilterVisibility();
    }

    render(){

        return (
            <Grid container justify='center' style={{padding: '0px 21px', margin:'10px 0px'}}>
                <Paper style={{maxWidth: '600px', width:'100%'}}> 
                            
                    <Grid container 
                            item
                            justify='space-between' 
                            alignContent='center'
                            alignItems='center'
                            style={{margin: '0px', padding: '2px 10px'}}
                    >
                        <Grid item>
                            <IconButton aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <Typography variant='h5'> No Problem App </Typography> 
                        </Grid>
                        <Grid item>
                            <FilterVisibleToogle
                                onHandleFilterVisibility = {this.handleFilterVisibility}
                            />
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        )
    }

}
