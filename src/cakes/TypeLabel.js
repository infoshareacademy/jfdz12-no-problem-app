import React from 'react';
import { Card, Label } from 'semantic-ui-react'

class TypeLabel extends React.Component{
    state = {
        typeId: this.props.typeId,
        types: []
    }

    fetchType = () => fetch ('./types.json').then(res => res.json());

    componentDidMount() {
        this.fetchType()
            .then(res => this.setState({ types: res }));
    }        

    render(){

        const type = this.state.types;
        //console.log(this.state.ty)
        let typeData = {
            name:'',
            color: ''
        }

        type.forEach((el)=>{
            if (el.id === this.state.typeId){
                typeData.name = el.name;
                typeData.color = el.color;
            }
        });

   
    return <>
        
            kategoria: 
            <Label 
                color={typeData.color ? typeData.color : 'black'} 
                style = {{float:'right'}}
                horizontal > {typeData.name}
                
            </Label>

        </>
    }
}

export default TypeLabel;
