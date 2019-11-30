import React from 'react';
import { Input, Button } from 'semantic-ui-react';

class CakeFilter extends React.Component{

    handleChange = this.handleChange.bind(this);

    handleChange(event) {
        this.props.onNameChange(event.target.value);
      }
    
    reset = (event) => {
        this.props.onReset(event);
    }

    render(){
        
        return <> 
            <h4>wyszukaj po nazwie</h4>
            <Input  icon='search' 
                    placeholder='Search...' 
                    value={this.props.filterNameValue}
                    onChange={this.handleChange} 
            />
            <span> </span>
            <Button onClick = {this.reset}> 
                wyczyść
            </Button>

            
           
        </>
    }
}

export default CakeFilter;