import React from 'react';
import {styles} from '../CakeStyles';
import { Button, CardMedia, withStyles, Paper, Grid, Container, Divider } from '@material-ui/core';
import CakeAddInput from './CakeAddInput';
import CakeAddTypesSelect from './CakeAddTypesSelect';
import CakeAddSelect from './CakeAddSelect';
import {YESNOSELECT} from '../../constans/selectConstans'
import { CakeAddCookList } from './CakeAddCookList';
import CookLabelFull from '../CookLabelFull';

class CakeAddForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cookList: false,
            // cakeAdd: {
            //     name : '',
            //     price: '',
            //     priceForPortion: '',
            //     portionDescription: '',
            //     typeId: 0,
            //     cookId: null,
            //     description: '',
            //     glutenFree: false,
            //     imgURL:'',
            // },
        }
        this.handleCakeAddForm = this.handleCakeAddForm.bind(this);
    }

    handleCakeAddForm(){
        this.props.onHandleCakeAddForm();
    }
    
    handleFileAdd = (event) => {
        const fileName = event.target.files[0].name;
       
        this.props.onHandleCakeAddChange({
            cakeAdd:{
                ...this.props.cakeAdd,
                imgURL : `./img/ciacha/${fileName}` 
            } 
        })
    }

    handleClickOpen = () => {
        this.setState(prevState => ({
            cookList: !prevState.cookList,
        }))
      };

    handleSelectCook = (value) =>{
        console.log('cookid', value)
        this.props.onHandleCakeAddChange ({
            cakeAdd: {
                ...this.props.cakeAdd,
                cookId: value,
            },
        });
        this.setState(prevState =>({
            cookList: !prevState.cookList,
        }))
    }

    handleCakeChange =(event) => {
        const {name, value} = event.target; 
        
        this.props.onHandleCakeAddChange ({
            cakeAdd:{
                ...this.props.cakeAdd,
                [name]: value,
            },
        });
    }

     


    findDataById = (data, id) => data.find((data) => data.id === id) || {};

    render(){

        const {cooks, types, classes} = this.props;
        const { name, 
                price, 
                priceForPortion, 
                portionDescription,
                cookId,
                typeId,
                description,
                glutenFree,
                imgURL} = this.props.cakeAdd;

        const selectedCook = this.findDataById(cooks, cookId);
        const selectetType = this.findDataById(types,typeId);
        const toSave = Object.entries(this.props.cakeAdd);  
        
        return(<div>
            <Container maxWidth = "lg" >
                <Grid >

                    <Paper className = {classes.fCardHeader} >
                        <CakeAddInput
                            onHandleCakeChange = {this.handleCakeChange}
                            value = {name}
                            name = "name"
                            label = "Nazwa ciasta: "
                            styleProp = "header"
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
                        
                        <Grid container item xs={12} sm={6} direction='column' wrap="wrap">
                            <Paper className={classes.fCardPaper}>
                                <CakeAddInput
                                    onHandleCakeChange = {this.handleCakeChange}
                                    value = {price}
                                    name = "price"
                                    label = "Cena zł/kg: "
                                />
                                <CakeAddInput
                                    onHandleCakeChange = {this.handleCakeChange}
                                    value = {priceForPortion}
                                    name = "priceForPortion"
                                    label = "cena za porcję/sztukę: "
                                />
                                <CakeAddInput
                                    onHandleCakeChange = {this.handleCakeChange}
                                    value = {portionDescription}
                                    name = "portionDescription"
                                    label = "porcja: "
                                    styleDirect = {{width: "300px"}}
                                />  
                                
                            </Paper>
                            <Paper className={classes.fCardPaper}>
                                <CakeAddTypesSelect
                                    onHandleCakeChange = {this.handleCakeChange}
                                    types = {types}
                                    value = {typeId}
                                    name = "typeId"
                                    label = "Typ ciasta: "
                                />
                                <CakeAddInput
                                    value = {selectetType.description||""}
                                    label = "Opis: "
                                    rows="2"
                                    multiline = {true}
                                    disabled = {true}
                                    styleDirect = {{width: "300px"}}
                                />
                                <CakeAddSelect
                                    onHandleCakeChange = {this.handleCakeChange}
                                    value = {glutenFree}
                                    name = "glutenFree"
                                    label = "bezglutenowe"
                                    options={YESNOSELECT}
                                />
                                                                
                            </Paper>
                            <Paper className={classes.fCardPaper}>
                                <CakeAddInput
                                    onHandleCakeChange = {this.handleCakeChange}
                                    value = {description}
                                    name = "description"
                                    label = "opis ciasta:"
                                    rows="4"
                                    multiline = {true}
                                    styleDirect = {{width: "400px"}}
                                />
                            </Paper> 

                        </Grid>
                            
                    </Grid>
                    
                    <Paper className={classes.fCardPaper}>
                        <Grid>
                            <Button onClick={this.handleClickOpen} 
                                    variant='outlined'
                                    style={{marginBottom: '10px'}}
                            >
                                dodaj kucharza
                            </Button>
                            <Divider />
                        </Grid>
                        <Grid>
                            {cookId !== null 
                            ? <CookLabelFull 
                                    cook = {selectedCook}
                                />
                            : ''
                            }
                        </Grid>
                    </Paper>
                    <CakeAddCookList 
                        cookList = {this.state.cookList}
                        onHandleClickOpen = {this.handleClickOpen}
                        onHandleSelectCook = {this.handleSelectCook}
                        cooks = {cooks}
                    />
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

                        {toSave.map((el,idx) => (<div key={idx}> {el[0]} : {typeof (el[1]) === 'boolean'? (el[1]? "tak":"nie") :el[1]}  </div>))}

                    </div>
                    
                </Grid>
            </Container>
            
        </div>)
    }
}

export default withStyles(styles)(CakeAddForm);