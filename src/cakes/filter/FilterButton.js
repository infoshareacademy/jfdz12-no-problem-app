import React from 'react'
import { Button, Icon} from 'semantic-ui-react'

class FilterButton extends React.Component{

    filterVisibility = () =>{
        this.props.onButtonClick();
    }

    render(){    
        const {iconName} = this.props;
        
        return <>
              
            <Button style={{position: 'fixed', zIndex:99, left: 0 , top:50}} 
                    icon
                    size = 'mini'
                    compact
                    labelPosition='right' 
                    onClick = {this.filterVisibility}>
                filtry
                <Icon name = {iconName} />
            </Button>
            
        </>
    }
}
export default FilterButton;
      