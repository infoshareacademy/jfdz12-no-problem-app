import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import { withStyles, Grid, Typography,  Button} from '@material-ui/core';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import MySelect from './signComponent/MySelect';
import { USERTYPE } from '../constans/selectConstans';
import BasicData from './signComponent/BasicData';
import ContactData from './signComponent/ContactData';
import CookData from './signComponent/CookData';
import {styles} from './styles/SignOnStyles';

class SignOn extends Component {
    state={
        gender: '',
        name:'',
        surname:'',
        email:'',
        password:'',
        nick:'',
        mobile:'',
        userType: 'user',
        avatar:'',
        city:'',
        district:'',
        street: '',
        description: '',
    }

    handleChange = (event) =>{
        const {name, value} = event.target;
        this.setState({
            [name]: value,
        })
    }

    addData = () => {
        const {gender, description, name, surname, mobile, email, nick, userType,city,street, district, avatar} = this.state;

        const basicData = {
            nick: nick,
            name: name,
            surname: surname,
            gender: gender,
            contact:{
                email: email,
                mobile: mobile
            },
            userType: userType,
        }

        const cookData ={
            avatar: avatar,
            decription: description,
            location :{
                city: city,
                district: district,
                street: street
            }

        }

        if (userType ==='cook'){
            return {
            ...basicData,
            ...cookData
            }
        }else {
            return basicData;
        }
    }

    handleOnClick = (event) =>{
        
        event.preventDefault();
        


        console.log(this.addData())
    }
    
    render() {
        const {classes} = this.props;
        const {gender, name, surname, mobile, password, email, nick, userType,city,street, district, avatar} = this.state;
        return (
            <PageWrapper>
               <Grid
                    container
                    justify='center'
                    width="xs" 
                    className = {classes.root}    
                >
                    <form className={classes.paper} >
                        <Typography component="h1" variant="h5">
                            Rejestracja
                        </Typography>
                        <MySelect 
                            onHandleChange = {this.handleChange}
                            name = 'userType'
                            value = {userType}
                            options = {USERTYPE}
                            label='rodzaj użytkownika'
                            align = 'left'
                            width = '300px'
                            labelWidth = {125}
                        />
                        <Grid container xs={12} item wrap='wrap'>
                            <Grid item xs={12} sm={6} className={classes.subGrid}>
                                <BasicData 
                                    onHandleChange = {this.handleChange}
                                    name = {name}
                                    surname = {surname}
                                    nick = {nick}
                                    gender = {gender}
                                />      
                            {userType === 'cook'
                                ? <ContactData 
                                        onHandleChange = {this.handleChange}
                                        email = {email}
                                        password = {password}
                                        mobile = {mobile}
                                    />
                                : ""
                            }    
                                
                            </Grid>
                            { userType === 'cook' 
                                ? <Grid item xs={12} sm={6} className={classes.subGrid}>
                                        <CookData 
                                            onHandleChange = {this.handleChange}
                                            avatar = {avatar}
                                            city ={city}
                                            street = {street}
                                            district = {district}
                                        />                                
                                    </Grid> 
                                :   <Grid item xs={12} sm={6} className={classes.subGrid}> 
                                        <ContactData 
                                            onHandleChange = {this.handleChange}
                                            email = {email}
                                            password = {password}
                                            mobile = {mobile}
                                        />
                                    </Grid>
                            }
                            
                        </Grid>
                        <Grid xs={12} item>
                            <Button
                                type='submit'
                                fullWidth
                                name='userId'
                                variant="contained"
                                className={classes.submit}
                                onClick = {this.handleOnClick}
                            >
                                Zapisz
                            </Button>
                        </Grid>
                            
                    </form>
                </Grid>

            </PageWrapper>
        )
    }
}   
export default withStyles(styles)(SignOn)