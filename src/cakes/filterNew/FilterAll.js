import React from 'react';
import { Popover, Typography, Grid, withStyles, IconButton, InputBase,Paper, Divider } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';

const styles={
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 700,
    },
    grid:{
        margin: '10px',
    },
    input: {
        marginLeft: '10px',
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}

class FilterAll extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {classes} = this.props;

        return (<>
            <Grid container 
                    spacing={2} 
                    justify='center' 
                    alignContent='center' 
                    className = {classes.grid}
            >
                <Paper component="form" className={classes.root}>
                    <IconButton className={classes.iconButton} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    <InputBase
                        className={classes.input}
                        placeholder="ciasto cukiernik lokalizacja ..."
                        //inputProps={{ 'aria-label': 'search google maps' }}
                    />
                   
                    <Divider className={classes.divider} orientation="vertical" />
                    <IconButton className={classes.iconButton} aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                </Paper>
            </Grid>
            
        </>)
    }
         
} 

export default  withStyles(styles)(FilterAll);


// <Popover
// open={true}
// anchorEl={true}
// anchorOrigin={{
//   vertical: 'bottom',
//   horizontal: 'center',
// }}
// transformOrigin={{
//   vertical: 'top',
//   horizontal: 'center',
// }}
// >
// <Typography >The content of the Popover.</Typography>
// </Popover>
