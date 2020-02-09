import React, { Component } from 'react';
import PageWrapper from '../components/PageWrapper';
import { CircularProgress } from '@material-ui/core';
import firebase from 'firebase';
import { FIREBASE_API } from '../api/Api2';
import MessageSnakebar from './signComponent/MessageSnakebar';
import SignOnRender from './SignOnRender';
import { Link } from 'react-router-dom';

export default class SignOn extends Component {
    state = {
        gender: '',
        name: '',
        surname: '',
        email: '',
        password: '',
        nick: '',
        mobile: '',
        userType: 'user',
        avatar: '',
        city: '',
        district: '',
        street: '',
        description: '',
        uid: '',
        isLoading: false,
        message: false,
        redirect: false,
        file: null,
        isError: false,
        error:'',
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        })
    }

    addData = () => {
        const { uid, gender, description, name, surname, mobile, email, nick, userType, city, street, district, avatar } = this.state;

        const basicData = {
            nick: nick,
            name: name,
            surname: surname,
            gender: gender,
            contact: {
                mail: email,
                mobile: mobile
            },
            userType: userType,
            uid: uid
        }

        const cookData = {
            avatar: avatar,
            description: description,
            location: {
                city: city,
                district: district,
                street: street
            }
        }

        if (userType === 'cook') {
            return {
                ...basicData,
                ...cookData
            }
        } else {
            return basicData;
        }
    }

    createUserFetch = () => {
       
        fetch(`${FIREBASE_API}/users.json`, {
            method: 'POST',
            body: JSON.stringify(this.addData())
        })
        .catch((error) => {
            this.setState({ error: error.message, isError: true });
            console.log(error.message);
        })
        .finally(() => {
            if (firebase.auth().currentUser) {
                firebase.auth().signOut();
            }
            this.setState({
                isLoading: false,
                message: true,
                redirect: true,
            })
        })
    }

    signUp = () => {
        const { email, password } = this.state;
        
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(data => {
                    this.setState({ uid: data.user.uid });
                    this.createUserFetch();
                })
            .catch((error) => {
                    this.setState({ error: error.message, isError: true });
                })
            .finally(()=> this.setState({ isLoading: false }));
    };

    handleOnClick = (event) => {
        event.preventDefault();
        this.setState({ isLoading: true })

        this.signUp();
    }

    handleClose = () => {
        this.setState({ message: false });
    }


    render() {
        const { message, email, isLoading, isError, redirect } = this.state;

        if(redirect) {
            return <>
                <PageWrapper>
                    <MessageSnakebar
                            open={message}
                            onHandleClose={this.handleClose}
                            message={`użytkownik ${email} został dodany pomyślnie`}
                    />
                    <h1>Użytkownik został zarjestrowany, zaloguj się </h1>
                    <Link to='/SignIn'>Sign in</Link>
                </PageWrapper> 
            </>
        }

        if(isError) {
            return  <PageWrapper >
                        <h3>wystąpił błąd: {this.state.error}</h3>
                        <Link to='/'>Powrót do strony głównej</Link>
                    </PageWrapper>
        }

        if (isLoading) {
            return <PageWrapper >
                        <CircularProgress color="secondary" />
                    </PageWrapper>
        }

        return (
            <PageWrapper>
                
                <SignOnRender 
                    onHandleChange = {this.handleChange}
                    onHandleOnClick = {this.handleOnClick}
                    onHandleFileAdd = {this.handleFileAdd}
                    state = {this.state}
                />

            </PageWrapper>
        )
    }
}
;