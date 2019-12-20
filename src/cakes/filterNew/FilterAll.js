import React from 'react';
import { Grid, withStyles, IconButton, InputBase,Paper, Divider } from '@material-ui/core';
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
    
        // this.handleClick = this.handleClick.bind(this);
    }

    handleFilterAllChange = (event) => {
        this.props.onHandleFilterAllChange (event);
      };

    // filteredListOfCaC(){
    //     const search = this.state.value.toLowerCase();
    //     return this.props.cakesAndCooks
    //         .filter((el) => el.name.toLowerCase().includes(search))
    //         .filter((el, idx) => idx<10)
        
    // }

    render(){
        const { classes } = this.props;
       
        return (<>
            <Grid   container 
                    spacing={2} 
                    justify='center' 
                    alignContent='center' 
                    className = {classes.grid}
            >
                <Paper component="form" className={classes.root}>
                    <Grid container direction='column' justify='center' alignContent='center' >
                        <Grid container>
                            <IconButton className={classes.iconButton} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                            <InputBase
                                onChange={this.handleFilterAllChange}
                                value={this.props.filterAll}
                                className={classes.input}
                                placeholder="ciasto cukiernik lokalizacja ..."
                            />
                        
                            <Divider className={classes.divider} orientation="vertical" />
                            <IconButton className={classes.iconButton} aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
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

// <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
// Open Menu
// </Button>

// <Menu style
// id="simple-menu"
// anchorEl={this.state.anchorEl}
// keepMounted
// open={Boolean(this.state.anchorEl)}
// onClose={this.handleClose}
// getContentAnchorEl={null}
// anchorOrigin={{
// vertical: 'bottom',
// horizontal: 'left',
// }}
// transformOrigin={{
// vertical: 'top',
// horizontal: 'center',
// }}
// style={{width:"200px"}}
// // anchorReference="anchorPosition"
// // anchorPosition={
//     // {top: '10px', left: '10px'}
//     // }
// >
// <MenuItem onClick={this.handleClose}>Profile</MenuItem>
// <MenuItem onClick={this.handleClose}>My account</MenuItem>
// <MenuItem onClick={this.handleClose}>Logout</MenuItem>
// </Menu>

//<ListItemText disableTypography ={true} primary={el.name} />

// //działająca list pod filtrem
// {this.state.click &&(
//     <div>
//         <Divider variant='middle' />
    
//         <List component="nav" aria-label="secondary mailbox folders">
//             {filteredCakesAndCooks.map((el) =>{
//                 return(
//                     <ListItem button key={el.id}>
//                         {el.name} 
//                     </ListItem>
//                 )    
//             })
//             }
//         </List>
//     </div>)
//     }

