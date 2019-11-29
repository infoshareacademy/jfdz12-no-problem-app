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
        this.fetchType()
    }        

    render(){

        const {types, typeId} = this.state;
        let typeData = {};
        
        types.find((el) => {
                typeData = {
                    name: el.name, 
                    color: el.color
                }
            return el.id === typeId;
        });

        //const {name, color} = types.find((el) => el.id === typeId );

    return <>
            kategoria: 
            <Label 
                    color = {typeData.color || 'black'} 
                    style = {{float:'right'}}
                    horizontal > 
                {typeData.name}
            </Label>
        </>
    }
}

export default TypeLabel;
