import React from 'react';
import { CircularProgress, } from '@material-ui/core';
import { CAKEADDOBJ } from '../../constans/emptyObject'
import { getFullData, addNewCakeFetch, updateCakeFetch } from '../../api/Api2';
import PageWrapper from '../../components/PageWrapper';
import firebase from 'firebase';
import { Redirect, Link } from 'react-router-dom';
import RenderCakeAddForm from './RenderCakeAddform'; 
import MessageSnakebar from '../../components/MessageSnakebar';
import { validateCakeAdd } from './component/cakeAddFunction'

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
            snakeOpen: false,
            isRequired: false,
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
                        error: ' nie możesz edytować tego ciasta '
                    })
                }  
            })
            .catch(error => {
                this.setState({
                    isError: true,
                    error:error.toString(),
                })
            })
            .finally(() => this.setState({
                isLoading: false,
                snakeOpen:true,
            }))
    }

    handleFileAdd = (event) => {
        const file =  event.target.files[0];
        const fileName = file.name;
        
        firebase.storage().ref(`cakes/${Date.now()}${fileName}`)
            .put(file)
            .then((res) => {
                res.ref.getDownloadURL().then(url => {
                    
                    this.setState(prevState => ({
                            cakeAdd:{
                                ...prevState.cakeAdd,
                                imgURL : url, 
                            },
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
            return addNewCakeFetch(cakeAdd);
        }else{
            delete cakeAdd.id;
            return updateCakeFetch(cakeAdd, this.cakeId);
        }
    }

    addCakeFetch(){
        const validate = validateCakeAdd(this.state.cakeAdd);
        console.log('onClick', validateCakeAdd(this.state.cakeAdd))
        if (validate) {
            this.setState({ isRequired: validate, });
            console.log('onClick- isReq', )
        }else{
            this.fetchCake()
            .then((res) => {
                this.setState({ 
                    saveCake: true, 
                    snakeOpen: true,
                    isRequired: false,
                });
            })
            .catch((err) => {
                this.setState({
                    error: err.message,
                    isError: true,
                }) 
            });
        }
    }

    handleClose = () => {
        this.setState({ snakeOpen: false });
    }


    findDataById = (data, id) => data.find((data) => data.id === id) || {};

    render(){
    
        const {cooks, types, isLoading, saveCake, isError, error, cakeAdd, snakeOpen, isRequired, } = this.state;
        const { cookId, typeId, } = this.state.cakeAdd;

        const selectedCook = this.findDataById(cooks, cookId);
        const selectetType = this.findDataById(types,typeId);
       
        if(saveCake && !snakeOpen) {
            return <Redirect to={'/'}/>
        }

        if(saveCake && snakeOpen) {
            return (<>
                <PageWrapper>
                    <MessageSnakebar
                        onHandleClose={this.handleClose}
                        open={this.state.snakeOpen}
                        message={'ciasto zostało dodane'}
                        backColor={'success'}
                    />
                    <CircularProgress/>
                </PageWrapper>

            </>)
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
                    <div>
                        <Link to={'/'}>wróć na stronę główną </Link>
                    </div>
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
                    isRequired={isRequired}
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