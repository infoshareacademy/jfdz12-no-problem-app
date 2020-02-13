import React, { useState, useEffect } from 'react';
import { CircularProgress, } from '@material-ui/core';
import { CAKEADDOBJ } from '../../constans/emptyObject'
import { getFullData, addNewCakeFetch, updateCakeFetch } from '../../api/Api2';
import PageWrapper from '../../components/PageWrapper';
import { storage } from 'firebase';
import { Redirect, Link } from 'react-router-dom';
import RenderCakeAddForm from './RenderCakeAddform'; 
import MessageSnakebar from '../../components/MessageSnakebar';
import { validateCakeAdd } from './component/cakeAddFunction'
import { connect } from 'react-redux';

const CakeAddForm = (props) => {
    
    const cakeId = props.match.params.id;
    const userIdRef = props.userIdInStore;
    const [cooks, setCooks] = useState([]);
    const [types, setTypes] = useState([]);
    const [isLoading, setIsLoading] = useState(true); 
    const [cakeAdd, setCakeAdd] = useState({});
    const [saveCake, setSaveCake] = useState(false);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState('');
    const [snakeOpen, setSnakeOpen] = useState(false);
    const [isRequired, setIsRequired]= useState(false);
    const { storeIsLoading } = props;

    useEffect (() => {
        if(!storeIsLoading){
            getFullData()
                .then(data => {
                    let checkData = false;
                    
                    if(cakeId === 'empty'){
                        checkData = true;
                    }else{
                        if(data[0].find(cake => (cake.id === cakeId && cake.cookId === userIdRef ))){
                            checkData=true;
                        }else{
                            checkData=false;
                        }
                    }
                    
                    if(checkData){
                        const cakeAddData = cakeId === 'empty'
                            ? { ...CAKEADDOBJ, cookId: userIdRef }  
                            : data[0].find(cake => (cake.id === cakeId && cake.cookId === userIdRef ));
                        
                        setCooks(data[1]);
                        setTypes(data[2]);
                        setCakeAdd ({...cakeAddData })    
                    }else{
                        setIsError(true);
                        setError(' nie możesz edytować tego ciasta ');
                    }  
                })
                .catch(error => {
                    setIsError(true);
                    setError(error.toString());
                })
                .finally(() => {
                        setIsLoading(false);
                        setSnakeOpen(true);
                    }   
                )
        }
    },[userIdRef, storeIsLoading, cakeId]);

    const handleFileAdd = (event) => {
        const file =  event.target.files[0];
        const fileName = file.name;
        
        storage().ref(`cakes/${Date.now()}${fileName}`)
            .put(file)
            .then((res) => {
                res.ref.getDownloadURL().then(url => {
                    setCakeAdd(prevState => (
                            {
                                ...prevState,
                                imgURL : url, 
                            }
                        ))
                });
            })
    }

    const handleCakeChange = (event) => {
        const {name, value} = event.target; 
        
        setCakeAdd(prevCakeAdd => (
            {
                ...prevCakeAdd,
                [name]: value,
            }
        ));
    }

    const fetchCake = () => {

        if(cakeId === 'empty'){
            return addNewCakeFetch(cakeAdd);
        }else{
            delete cakeAdd.id;
            return updateCakeFetch(cakeAdd, cakeId);
        }
    }

    const addCakeFetch = () => {
        const validate = validateCakeAdd(cakeAdd);
       
        if (validate) {
            setIsRequired(validate);
        }else{
            fetchCake()
            .then(() => {
                setSnakeOpen(true);
                setSaveCake(true);
                setIsRequired(false);
            })
            .catch((err) => {
                    setError(err.message);
                    setIsError(true);
                }) 
        };
    }

    const handleClose = () => {
        setSnakeOpen(false);
    }


    const findDataById = (data, id) => data.find((data) => data.id === id) || {};

    const { cookId, typeId, } = cakeAdd;

    const selectedCook = findDataById(cooks, cookId);
    const selectetType = findDataById(types,typeId);
    const backLink = props.location.search.slice(1)

    if(saveCake && !snakeOpen) {
        return  <Redirect to={`/${backLink}`}/>
    }

    if(saveCake && snakeOpen) {
        return (<>
            <PageWrapper>
                <MessageSnakebar
                    onHandleClose={handleClose}
                    open={snakeOpen}
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
                onHandleCakeChange = {handleCakeChange}
                handleFileAdd = {handleFileAdd}
                addCakeFetch= {addCakeFetch}
                {...props}
            />
            
        </PageWrapper>)
    }

}

const mapStateToProps = (state) => ({
    userInStore: state.userReducer.user,
    userIdInStore: state.userReducer.userId,
    storeIsLoading: state.userReducer.isLoading, 
});

export default connect( mapStateToProps, null )(CakeAddForm);