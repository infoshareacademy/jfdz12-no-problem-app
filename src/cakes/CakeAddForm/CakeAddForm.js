import React from 'react';
import {styles} from '../CakeStyles';
import { Button, CardMedia, withStyles, Paper, Grid, Container, CircularProgress, } from '@material-ui/core';
import CakeAddInput from './CakeAddInput';
import CakeAddTypesSelect from './CakeAddTypesSelect';
import CakeAddSelect from './CakeAddSelect';
import {YESNOSELECT} from '../../constans/selectConstans'
import CookLabelFull from '../CookLabelFull';
import { CAKEADDOBJ } from '../../constans/emptyObject'
import { getFullData } from '../../api/Api2';
import PageWrapper from '../../components/PageWrapper';
import firebase from 'firebase';
import { Redirect } from 'react-router-dom';

class CakeAddForm extends React.Component{
    constructor(props){
        super(props);
        this.cakeId = props.match.params.id;
        this.userIdRef = sessionStorage.getItem('userId');
        this.state = {
            cookList: false,
            cakes: [],
            cooks:[],
            types:[],
            cakesMaxId: null,
            isLoading: true,
            cakeAdd: {},
            saveCake: false,
            file: null,
        }
        this.addCakeFetch = this.addCakeFetch.bind(this);
    }
       
    componentDidMount(){

        getFullData()
            .then(data => {
                const cakeAddData = this.cakeId === 'empty'
                    ? CAKEADDOBJ 
                    : data[0].find(cake => cake.id === this.cakeId)
       
                this.setState({
                    cakes: data[0],
                    cooks: data[1],
                    types: data[2],
                    cakeAdd: {
                        ...cakeAddData,
                        cookId: this.userIdRef,
                    }
               })
            })
            .catch(error => console.log('bład addformfetch', error.toString()))
            .finally(() => this.setState({
                isLoading: false,
            }))
    }

    // componentDidUpdate(){
    //     if (this.state.saveCake) {
            
    //         this.setState({saveCake: false})
    //     }
    // }

    handleFileAdd = (event) => {
        const file =  event.target.files[0];
        const fileName = file.name;
        
        firebase.storage().ref(`cakes/${fileName}`)
            .put(file)
            .then((res) => {
                res.ref.getDownloadURL().then(url => {
                    this.setState(prevState => ({
                            cakeAdd:{
                                ...prevState.cakeAdd,
                                imgURL : url, 
                            } ,
                        }))
                });
            })
    }

    handleCakeChange =(event) => {
        const {name, value} = event.target; 
        
        this.setState(prevState => ({
            cakeAdd:{
                ...prevState.cakeAdd,
                [name]: value,
            },
        }));
    }

    addCakeFetch(){
        const { cakeAdd } = this.state;
        const cake = { ...cakeAdd, };
       
        fetch(`https://aleciachaapp.firebaseio.com/cakes.json`, {
            method: 'POST',
            body: JSON.stringify(cake)
        })
            .then((res) => {
                this.setState({ saveCake: true, });
                console.log('dodałem cake:' , res)
            })
            .catch((err) => {
                alert(err.message)
            });
        }

    findDataById = (data, id) => data.find((data) => data.id === id) || {};

    render(){
      
        const { classes } = this.props;
        const {cooks, types, isLoading, saveCake} = this.state;
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
        const selectetType = this.findDataById(types,typeId);
       
        if(saveCake) {
            return <Redirect to={'/'}/>
        }
        

        if (isLoading) {
            return(<PageWrapper>
                <CircularProgress/>
            </PageWrapper>
            )       
        }

        if(!isLoading){
            return(<PageWrapper>
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
                                        styleDirect = {{width: "95%"}}
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
                                        styleDirect = {{width: "95%"}}
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
                                        styleDirect = {{width: "95%"}}
                                    />
                                </Paper> 

                            </Grid>
                                
                        </Grid>
                        
                        <Paper className={classes.fCardPaper}>
                            <Grid>
                                <CookLabelFull 
                                    cook = {selectedCook}
                                />
                            </Grid>
                        </Paper>
                        
                        <Button  
                            variant="outlined" 
                            color="secondary"
                            style = {{margin: '20px auto'}}
                            onClick = {this.props.history.goBack}
                        > 
                            powrót 
                        </Button>
                        <Button onClick={this.addCakeFetch}
                                variant="outlined" 
                                color="primary"
                                style = {{margin: '20px'}}
                        > 
                            zapisz
                        </Button>
                        
                    </Grid >
                </Container>
                
            </PageWrapper>)
        }

        
    }
}

export default withStyles(styles)(CakeAddForm);