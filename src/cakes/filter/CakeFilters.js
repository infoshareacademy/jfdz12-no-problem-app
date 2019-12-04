import React from 'react';
import { Input, Button, Checkbox, Segment} from 'semantic-ui-react';
import FilterDropdown from './FilterDropdown'
import FilterCook from './FilterCook';

class CakeFilters extends React.Component{

    handleChange = (event) => {
        this.props.onNameChange(event.target.value);
      }
    
    handleCookChange = (event) =>{
        this.props.onCookChange(event.target.value);
    }
    
    reset = () => {
        this.props.onReset();
    }

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
                            top:60 }}>

                <Input  icon='search' 
                        placeholder='wpisz nazwę ciasta' 
                        value={this.props.filterNameValue}
                        onChange={this.handleChange} 
                />
                <span> </span>

                <Button onClick = {this.reset}> 
                    wyczyść 
                </Button>
                <p></p>
                
                <Checkbox label='bezglutenowe' 
                        checked = {this.props.checkboxChecked} 
                        onClick = {this.handleCheckboxChange}  
                />
                <p></p>
                
                <FilterDropdown 
                    onCheckedType = {this.handleChangeType}
                    
                />
                <p></p>
            
                <FilterCook
                    onCookChange = {this.handleCookChange}
                    filterCookValue = {this.props.filterCookName}
                />

            </Segment>
        </>
    }
}

export default CakeFilters;