import React from 'react';
import { Label } from 'semantic-ui-react'

class TypeLabel extends React.Component{
    state = {
        typeId: this.props.typeId,
        types: []
    };

    fetchType = () => {fetch ('./types.json')
            .then(res => res.json())
            .then(res => this.setState({ types: res }))
        }

    componentDidMount() {
        this.fetchType();
    }        

    render(){
        const {types, typeId} = this.state;
        
        const {color,name} = types.find((el) => el.id === typeId) || {};
        
    return <>
            kategoria: 
            <Label 
                    color = {color || 'black'} 
                    style = {{float:'right'}}
                    horizontal > 
                {name}
            </Label>
        </>
    }
}

export default TypeLabel;
