import React from 'react';
import { Switch } from '@material-ui/core';



export class FilterAllToogle extends React.Component{
    constructor(props){
        super(props);
        this.handleToogleChange = this.handleToogleChange.bind(this);
    }

    handleToogleChange(e){
        this.props.onHandleToogleChange(e);
    }

    render(){
        return(
            <div  style={{position: "absolute", marginTop:-50, marginLeft:120}}>
                <Switch
                    checked={this.props.filterAllToogle}
                    onChange={this.handleToogleChange}
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />

            </div>
        )

    }

}