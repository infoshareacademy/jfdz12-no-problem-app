import React from 'react';
import { IconButton, Tooltip } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

export const FilterVisibleToogle = (props) => {
   
    const handleFilterVisibility = () => {
       props.handleFilterVisibility();
    };

    const useStyles = makeStyles(theme => ({
        root :{
            padding: 8.5,
            '&:hover': {
                    backgroundColor: '#607d8bf0',
                    transform: 'scale(1.1)',  
                },
        },
        WrapIconButtonStyle:{
            position: 'fixed',
            right: '15px',
            bottom: '75px',
            backgroundColor: '#607d8ba0',
            color: 'white',
        }, 
        IconButtonStyle:{
            fontSize: '2rem',
        },
    }));

    const classes = useStyles();

    return(
        <div>
            <Tooltip arrow title="Wyszukaj ciasto" placement="left">
                <IconButton aria-label="search"
                    onClick={handleFilterVisibility}
                    className={clsx(classes.WrapIconButtonStyle, classes.root)}
                >
                    <SearchIcon className ={classes.IconButtonStyle}/>
                </IconButton>
            </Tooltip>
        </div>
    )

    

}

