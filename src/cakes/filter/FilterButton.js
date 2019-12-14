import React from 'react';
import { Button, Icon} from '@material-ui/core';

class FilterButton extends React.Component{

    filterVisibility = () =>{
        this.props.onButtonClick();
    }

    render(){    
       
        return <>
            <Button
                style={{position: "absolute", display: 'flex', zIndex:99, marginTop:-50, marginLeft:0}} 
                onClick = {this.filterVisibility}
                variant="outlined" color="secondary" size="large"
                endIcon = {<Icon>filter</Icon>}
            > 
                filtry 
            </Button>
           
        </>
    }
}
export default FilterButton;
      