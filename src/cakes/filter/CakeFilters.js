import React from 'react';
import { Input, Button, Checkbox, Segment} from 'semantic-ui-react';
import FilterDropdown from './FilterDropdown'
import FilterCook from './FilterCook';

class CakeFilters extends React.Component{

    handleChange = (event) => {
        this.props.onCakeChange(event.target.value);
      }
    
    handleCookChange = (event) =>{
        this.props.onCookChange(event.target.value);
    }
    
    reset = () => this.props.onReset();

    resetCook = () => this.props.onResetCook();

    handleCheckboxChange = (event) =>{
        this.props.onChecked(event.target.checked)
    }

    handleChangeType = (event, data) =>{
        this.props.onCheckedType (event, data)
    }
    
    render(){

        return <> 
            <Segment style={{visibility: this.props.filterPropVisible,
                            position: 'fixed', 
                            zIndex:99, 
                            left: 0, 
                            top: 60,
                            width: '340px' }}>

                <Input  icon='search' 
                        placeholder='wpisz nazwę ciasta' 
                        value={this.props.filterNameValue}
                        onChange={this.handleChange}
                        style= {{margin: '10px 2px'}}
                />
                
                <Button onClick = {this.reset} > 
                    wyczyść 
                </Button>
                
                <FilterCook
                        onCookChange = {this.handleCookChange}
                        filterCookValue = {this.props.filterCookName}
                        style= {{margin: '10px 2px'}}
                />
                <Button onClick = {this.resetCook} > 
                    wyczyść 
                </Button>
                
                <Checkbox label='bezglutenowe' 
                        checked = {this.props.checkboxChecked} 
                        onClick = {this.handleCheckboxChange}
                        style= {{margin: '10px 2px'}}  
                />
                
                <FilterDropdown 
                    onCheckedType = {this.handleChangeType}
                />
            </Segment>
        </>
    }
}

export default CakeFilters;