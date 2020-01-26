import React from 'react';
import { CircularProgress, } from '@material-ui/core';
import { CAKEADDOBJ } from '../../constans/emptyObject'
import { getFullData } from '../../api/Api2';
import PageWrapper from '../../components/PageWrapper';
import firebase from 'firebase';
import { Redirect, Link } from 'react-router-dom';
import RenderCakeAddForm from './RenderCakeAddform'; 


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
            isError:false,
            error:'',
        }
        this.addCakeFetch = this.addCakeFetch.bind(this);
    }
       
    componentDidMount(){

        getFullData()
            .then(data => {
                let checkData = false;
                
                if(this.cakeId === 'empty'){
                    checkData = true;
                }else{
                    if(data[0].find(cake => (cake.id === this.cakeId && cake.cookId === this.userIdRef ))){
                        checkData=true;
                    }else{
                        checkData=false;
                    }
                }
                
                if(checkData){
                    const cakeAddData = this.cakeId === 'empty'
                        ? { ...CAKEADDOBJ, cookId: this.userIdRef }  
                        : data[0].find(cake => (cake.id === this.cakeId && cake.cookId === this.userIdRef ));
                    
                    this.setState({
                        cakes: data[0],
                        cooks: data[1],
                        types: data[2],
                        cakeAdd: {
                            ...cakeAddData,
                            }
                        })    
                }else{
                    this.setState({
                        isError: true,
                        error: ' nie ma takiego ciasta '
                    })
                }  
            })
            .catch(error => {
                console.log('bład addformfetch', error.toString())
                this.setState({
                    isError: true,
                    error:error.toString(),
                })
            })
            .finally(() => this.setState({
                isLoading: false,
            }))
    }

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

    handleCakeChange = (event) => {
        const {name, value} = event.target; 
        
        this.setState(prevState => ({
            cakeAdd:{
                ...prevState.cakeAdd,
                [name]: value,
            },
        }));
    }

    fetchCake = () => {
        const { cakeAdd } = this.state;

        if(this.cakeId === 'empty'){
            return fetch(`https://aleciachaapp.firebaseio.com/cakes.json`, {
                        method: 'POST',
                        body: JSON.stringify(cakeAdd)
                    })
        }else{
            delete cakeAdd.id;
            
            return fetch(`https://aleciachaapp.firebaseio.com/cakes/${this.cakeId}.json`, {
                        method: 'PUT',
                        body: JSON.stringify(cakeAdd)
                    })
        }

    }

    addCakeFetch(){

        this.fetchCake()
            .then((res) => {
                this.setState({ saveCake: true, });
                console.log('dodałem cake:' , res)
            })
            .catch((err) => {
                console.log(err.message)
            });
    }

    findDataById = (data, id) => data.find((data) => data.id === id) || {};

    render(){
    
        const {cooks, types, isLoading, saveCake, isError, error, cakeAdd} = this.state;
        const { cookId, typeId, } = this.state.cakeAdd;

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

        if (isError) {
            return(<PageWrapper>
                    <h3>wystąpił błąd: {error} </h3>
                    <Link to={'/'}>wróć na stronę główną </Link>
                </PageWrapper>
            )       
        }

        if(!isLoading){
            return(<PageWrapper>
                <RenderCakeAddForm
                    selectedCook = {selectedCook}
                    selectetType = {selectetType}
                    types = {types}
                    cakeAdd = {cakeAdd}
                    onHandleCakeChange = {this.handleCakeChange}
                    handleFileAdd = {this.handleFileAdd}
                    addCakeFetch= {this.addCakeFetch}
                    {...this.props}
                />
                
            </PageWrapper>)
        }

    }
}

export default CakeAddForm;