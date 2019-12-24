import React from 'react';
import { Button, IconButton, Hidden } from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';

export class FilterButton extends React.Component{

    handleToogleChange = () =>{
        this.props.onHandleToogleChange();
    }

    render(){    
       const myStyle = {
           borderRadius: this.props.filterAllToogle ? '20px': '5px',
           margin: '2px 0px',
           maxWidth:'150px',
           padding: '5px'
        };
        return <>
            <Hidden only='xs'>
                    <Button
                        style ={myStyle}
                        onClick = {this.handleToogleChange}
                        variant= {this.props.filterAllToogle ? "outlined" : "text"} 
                        color="default" 
                        size="medium"
                        
                    > 
                        {this.props.filterAllToogle ? "mniej" : "więcej" } 
                    </Button>
            </Hidden>
            <Hidden smUp>
                <IconButton aria-label="FilterListIcon"
                            onClick = {this.handleToogleChange}
                            color="default" 
                            size="medium"
                >
                    <FilterListIcon />
                </IconButton>
            </Hidden>
        </>
    }
}
      