import React from 'react';
import {styles} from '../CakeStyles';
import { Button, CardMedia, MenuItem, TextField, withStyles, Paper, Grid, Container } from '@material-ui/core';
import { Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText} from '@material-ui/core'
import CakeAddInput from './CakeAddInput';

class CakeAddForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cookList: false,
            cakeAdd: {
                name : '',
                price: '',
                priceForPortion: '',
                portionDescription: '',
                typeId: 18,
                cookId: 1,
                description: '',
                glutenFree: true,
                imgURL:'',
            },
        }
        this.handleCakeAddForm = this.handleCakeAddForm.bind(this);
    }

    handleCakeAddForm(){
        this.props.onHandleCakeAddForm();
    }
    
    handleFileAdd = (event) => {
        const fileName = event.target.files[0].name;
       
        this.setState(prevState => ({
            cakeAdd:{
                ...prevState.cakeAdd,
                imgURL : `./img/ciacha/${fileName}` 
            } 
        }))
    }

    handleClickOpen = () => {
        this.setState(prevState => ({
            cookList: !prevState.cookList,
        }))
      };

    handleSelectCook = (value) =>{
        this.setState(prevState => ({
            cakeAdd: {
                ...prevState.cakeAdd,
                cookId: value,
            },
            cookList: !prevState.cookList,
        }))
    }

    handleCakeChange =(event) => {
        const {name, value} = event.target; 
        this.setState(prevState => ({
            cakeAdd:{
                ...prevState.cakeAdd,
                [name]: value,
            },
        }))
    }

    findDataById = (data, id) => data.find((data) => data.id === id) || {};

    render(){
        const {cooks, classes} = this.props;
        const { name, 
                price, 
                priceForPortion, 
                portionDescription,
                cookId,
                typeId,
                description,
                glutenFree,
                imgURL} = this.state.cakeAdd;

        const selectedCook = this.findDataById(cooks, cookId);
        const toSave = Object.entries(this.state.cakeAdd);

        return(<div>
            <Container maxWidth = "lg" >
                <Grid >

                    <Paper className = {classes.fCardHeader} >
                        <CakeAddInput
                            onHandleCakeChange = {this.handleCakeChange}
                            value = {name}
                            name = "name"
                            label = "Nazwa ciasta"
                        /> 
                    </Paper>
                    
                    <Grid container wrap='wrap'>
                        
                        <Grid item xs={12} sm={6} className = {classes.fCardWrapMedia}>
                            {imgURL !=='' && 
                                <CardMedia 
                                    image={imgURL} 
                                    className = {classes.fCardMedia}
                                    style={{height:'90%'}}
                            /> }
                            
                            <input
                                accept="image/*"
                                style={{display:'none'}}
                                id="outlined-button-file"
                                type="file"
                                onChange = {this.handleFileAdd}
                            />
                            <label htmlFor="outlined-button-file" >
                                <Button variant="outlined" component="span" style={{margin: '10px'}} >
                                    dodaj zdjęcie
                                </Button>
                            </label>
                        </Grid>
                        
                        <Grid container item xs={12} sm={6} direction='column'>
                            <Paper className={classes.fCardPaper}>
                                <CakeAddInput
                                    onHandleCakeChange = {this.handleCakeChange}
                                    value = {price}
                                    name = "price"
                                    label = "Cena zł/kg"
                                />
                                <CakeAddInput
                                    onHandleCakeChange = {this.handleCakeChange}
                                    value = {priceForPortion}
                                    name = "priceForPortion"
                                    label = "cena za porcję/sztukę:"
                                />
                                <CakeAddInput
                                    onHandleCakeChange = {this.handleCakeChange}
                                    value = {portionDescription}
                                    name = "portionDescription"
                                    label = "porcja"
                                />  
                                
                            </Paper>
                            <Paper className={classes.fCardPaper}>
                                <CakeAddInput
                                    onHandleCakeChange = {this.handleCakeChange}
                                    value = {typeId}
                                    name = "typeId"
                                    label = "Typ ciasta"
                                />
                                <CakeAddInput
                                    onHandleCakeChange = {this.handleCakeChange}
                                    value = {typeId}
                                    name = "typeId"
                                    label = "Opis typu: "
                                />
                                <CakeAddInput
                                    onHandleCakeChange = {this.handleCakeChange}
                                    value = {glutenFree}
                                    name = "glutenFree"
                                    label = "bezglutenowe"
                                />
                                                                
                            </Paper>
                            <Paper className={classes.fCardPaper}>
                                <CakeAddInput
                                    onHandleCakeChange = {this.handleCakeChange}
                                    value = {description}
                                    name = "description"
                                    label = "opis ciasta:"
                                />
                            </Paper> 

                        </Grid>
                            
                    </Grid>
                    
                    <Paper className={classes.fCardPaper}>
                        <Button onClick={this.handleClickOpen}>dodaj kucharza</Button>
                        <Dialog
                            open={this.state.cookList}
                            onClose={this.handleClickOpen}
                            scroll={'paper'}
                            aria-labelledby="scroll-dialog-title"
                            aria-describedby="scroll-dialog-description"
                        >
                            <DialogTitle id="scroll-dialog-title">Lista kucharzy</DialogTitle>
                            
                            <DialogContent dividers={true}>
                                <DialogContentText id="scroll-dialog-description" tabIndex={-1}>

                                    {this.props.cooks.map((cook) =>(
                                        <MenuItem key={cook.id} onClick={() => this.handleSelectCook(cook.id)}>
                                            {cook.name} {cook.surname} {cook.location.city}
                                        </MenuItem>
                                        ))
                                    }
                                
                                </DialogContentText>
                            </DialogContent>

                            <DialogActions>
                                <Button onClick={this.handleClickOpen} color="primary">
                                    Cancel
                                </Button>
                            </DialogActions>
                        </Dialog>
                        <TextField 
                            id="outlined-search"
                            type = "text"
                            variant = "outlined"
                            value = { `${selectedCook.name} ${selectedCook.surname}` }
                            color = 'secondary'
                            size = 'small'
                            disabled = {true}
                        />
                        
                    </Paper>
                    
                    
                    <Button onClick={this.handleCakeAddForm} 
                            variant="outlined" 
                            color="secondary"
                            style = {{margin: '20px auto'}}
                    > 
                        powrót 
                    </Button>
                    
                </Grid >
                    
                <Grid item xs={12}>
                    <div>

                        {toSave.map((el,idx) => (<div key={idx}> {el[0]} : {el[1]}  </div>))}

                    </div>
                    
                </Grid>
            </Container>
            
        </div>)
    }
}

export default withStyles(styles)(CakeAddForm);