import React from 'react';
import { IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

export class FilterVisibleToogle extends React.Component{
    constructor(props){
        super(props);
        this.handleFilterVisibility = this.handleFilterVisibility.bind(this);
    }

    handleFilterVisibility(e){
        this.props.onHandleFilterVisibility(e);
    }

    render(){
        return(
            <div  >
                <IconButton aria-label="search"
                    onClick={this.handleFilterVisibility}
                >
                    <SearchIcon />
                 </IconButton>
                
            </div>
        )

    }

}



// <Switch
//                     size = 'medium'
//                     checked={this.props.filterVisibility}
//                     onChange={this.handleFilterVisibility}
//                     inputProps={{ 'aria-label': 'secondary checkbox' }}
//                 />
