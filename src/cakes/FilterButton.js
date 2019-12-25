import React from 'react';
import { Button } from '@material-ui/core';

export class FilterButton extends React.Component{

    handleToogleChange = () =>{
        this.props.onHandleToogleChange();
    }

    render(){    
       const myStyle = {
           borderRadius: this.props.filterAllToogle ? '20px': '5px',
           marginLeft: '10px',
           marginRight: '10px',
        };
        return <>
            <Button
                style ={myStyle}
                onClick = {this.handleToogleChange}
                variant= {this.props.filterAllToogle ? "outlined" : "text"} 
                color="default" 
                size="small"
            > 
                {this.props.filterAllToogle ? "mniej filtrów" : "więcej filtrów" } 
            </Button>
           
        </>
    }
}
      