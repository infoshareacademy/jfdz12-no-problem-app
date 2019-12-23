import React from 'react';
import { Button } from '@material-ui/core';

export class FilterButton extends React.Component{

    handleToogleChange = () =>{
        this.props.onHandleToogleChange();
    }

    render(){    
       const myStyle = {
           borderRadius: this.props.filterAllToogle ? '20px': '5px',
           margin: '2px 0px',
           maxWidth:'150px',
        };
        return <>
            <Button
                style ={myStyle}
                onClick = {this.handleToogleChange}
                variant= {this.props.filterAllToogle ? "outlined" : "text"} 
                color="default" 
                size="medium"
            > 
                {this.props.filterAllToogle ? "mniej filtrów" : "więcej filtrów" } 
            </Button>
           
        </>
    }
}
      