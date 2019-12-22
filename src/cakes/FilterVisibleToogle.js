import React from 'react';
import { Switch } from '@material-ui/core';

export class FilterVisibleToogle extends React.Component{
    constructor(props){
        super(props);
        this.filterVisibility = this.filterVisibility.bind(this);
    }

    filterVisibility(e){
        this.props.onFilterVisibility(e);
    }

    render(){
        return(
            <div  style={{position: "absolute", marginTop:-50, marginLeft:50}}>
                <span>{this.props.filterVisibility ? "Ukryj filtry" : "Pokaż filtry"}</span>
                <Switch
                    size = 'medium'
                    checked={this.props.filterVisibility}
                    onChange={this.filterVisibility}
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />

            </div>
        )

    }

}