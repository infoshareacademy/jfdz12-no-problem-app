import React, { useState, useEffect } from 'react';
import { CircularProgress, } from '@material-ui/core';
import { CAKEADDOBJ } from '../../constans/emptyObject'
import { getFullData, addNewCakeFetch, updateCakeFetch } from '../../api/Api2';
import PageWrapper from '../../components/PageWrapper';
import { storage } from 'firebase';
import { Redirect, Link } from 'react-router-dom';
import RenderCakeAddForm from './RenderCakeAddform'; 
import { validateCakeAdd } from './component/cakeAddFunction'
import { connect } from 'react-redux';
import { startSnack } from '../../state/snackbar'; 

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
                setSaveCake(true);
                cakeId === 'empty' 
                ? props.startSnack('zostało dodane nowe ciasto', 'success')
                : props.startSnack('dane ciasta zostały zaktualizowane', 'success')
            })
            .catch((err) => {
                    setError(err.message);
                    setIsError(true);
                })
        };
    };

    const findDataById = (data, id) => data.find((data) => data.id === id) || {};

    const { cookId, typeId, } = cakeAdd;
    
    const selectedCook = findDataById(cooks, cookId);
    const selectetType = findDataById(types,typeId);
    const backLink = props.location.search.slice(1)


    if(saveCake) {
        return  <Redirect to={`/${backLink}`}/>
    }

    if(saveCake) {
        return (<>
            <PageWrapper>
                <CircularProgress/>
            </PageWrapper>

        </>)
    }
    
    if (isLoading ) {
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

const mapDispatchToProps = {
	startSnack,
};

export default connect( mapStateToProps, mapDispatchToProps )(CakeAddForm);