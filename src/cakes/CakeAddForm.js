import React from 'react';
import { Button, CardMedia, } from '@material-ui/core';


export class CakeAddForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            filePath: '',
        }
        this.handleCakeAddForm = this.handleCakeAddForm.bind(this);
    }

    handleCakeAddForm(){
        this.props.onHandleCakeAddForm();
    }
    
    handleFileAdd = (event) => {
        this.setState({
            filePath: `./img/ciacha/${event.target.files[0].name}`,
        })
    }

    render(){
        console.log(this.state.filePath)
        return(<>
            <div>cake add form</div>
            <input
                accept="image/*"
                style={{display:'none'}}
                id="outlined-button-file"
              //  multiple
                type="file"
                onChange = {this.handleFileAdd}
            />
            <label htmlFor="outlined-button-file">
                <Button variant="outlined" component="span" >
                    Upload
                </Button>
            </label>
           
            <hr/>
            {this.state.filePath !=='' && <CardMedia image={this.state.filePath} style = {{width:'200px', height:'150px'}}/> }
            <hr/>
            <Button onClick={this.handleCakeAddForm} 
                            variant="outlined" 
                            color="secondary"
                            style = {{margin: '20px auto'}}
            > 
                powrót 
            </Button>
        </>)
    }
}