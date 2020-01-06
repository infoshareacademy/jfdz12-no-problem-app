import React from 'react';
import { IconButton, Tooltip } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';


export const FilterVisibleToogle = (props) => {
   
    const handleFilterVisibility = () => {
       props.handleFilterVisibility();
    };

    const useStyles = makeStyles(theme => ({
        filterIcon: {
          position: "fixed",
          top: "90vh",
          left: "90vw",
          backgroundColor: "darkgrey",
          color: "white"
      }
    }));
    const classes = useStyles();

    return(
        <div>
            <Tooltip title="Wyszukaj ciasto" placement="left">
                <IconButton aria-label="search"
                    onClick={handleFilterVisibility}
                    className={classes.filterIcon}
                >
                    <SearchIcon />
                </IconButton>
            </Tooltip>
        </div>
    )

    

}



/* <Switch
                    size = 'medium'
                    checked={this.props.filterVisibility}
                    onChange={this.handleFilterVisibility}
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />  */
