import React from 'react';
import { Label } from 'semantic-ui-react'

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

        //const {typeData} = this.state.types;

        //let {name,color} = typeData.find(el => el.id === this.state.typeId );

        const type = this.state.types;
       
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
                    color={typeData.color || 'black'} 
                    style = {{float:'right'}}
                    horizontal > 
                {typeData.name}
            </Label>

        </>
    }
}

export default TypeLabel;
