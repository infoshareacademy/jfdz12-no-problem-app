import React from 'react';
import { Button } from '@material-ui/core';
import { UserList } from './UserList';
import { UserCard } from './UserCard';
import SignIn from './SignIn'
import {dataManager} from '../api/Api'

export class User extends React.Component{
    constructor(){
        super();
        this.state = {
            isLoading: false,   
            isError: false,
            error: '',
            users: dataManager.getUsers(),
            openUserCard: false,
            openUserList: false,
            userId: '',
            openSignIn: false,
        };
     
        this.handleOpenUser = this.handleOpenUser.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleUserChange=this.handleUserChange.bind(this);
        this.handleOpenUserCard = this.handleOpenUserCard.bind(this);
    }

    // componentDidMount(){
    //     const data = dataManager.getUsers(); 
        
    //     this.setState({
    //                 users: data,
    //             })
    // } 
         
    handleOpen (name) {
        this.setState(prevState => ({
            [name]: !prevState[name],
        }))
    }

    handleInput = (event) => {
        this.setState ({
            [event.target.name]: event.target.value,
        })           
    }

    handleOpenUser (userId) {
        this.setState(prevState => ({
            userId: userId,
            openUserList: !prevState.openUserList,
            openUserCard: !prevState.openUserCard,
        }));
        this.addIdToSesionStorage(userId);
    }

    handleOpenUserCard(){
        this.setState(prevState =>({
            openUserCard: !prevState.openUserCard,
            openSignIn: !prevState.openSignIn,
        }))
    }

    addIdToSesionStorage(userId){
        sessionStorage.setItem('userId', userId);
    }

    handleUserChange(event){
        console.log('name:', event.target.name, 'userid:', event.target.value )
        this.setState({
            [event.target.name]: event.target.value, 
        })
    }

    

    findDataById = (data, id) => data.find((data) => data.id === id) || {};
    
    render(){
        const { userId, openSignIn, openUserCard, openUserList, users, isLoading, error, isError} = this.state;

        return <div style={{marginTop:'100px'}}>
            {!isLoading && openSignIn &&<SignIn
                //onHandleInput = {this.handleInput}
                onHandleUserChange = {this.handleUserChange}
                openSignIn = {openSignIn}
                users={users}
                userId={userId}
                //email={email}
                onHandleOpenUserCard = {this.handleOpenUserCard}
            />}
            
            {!isLoading && !openUserCard && <Button 
                variant='outlined' 
                onClick = {() => this.handleOpen('openUserList')}
                style = {{margin:'10px'}}
            >
                {openUserList ? 'ukryj listę uzytkowników' : 'pokaż listę użytkowników'}
            </Button>}
                        
            
            {!isLoading && openUserList &&
                <UserList 
                    users = {users}
                    onHandleOpenUser= {this.handleOpenUser}
                />
            }

            {!isLoading && openUserCard &&
                <UserCard 
                    user = {this.findDataById(users, userId)}
                    onHandleOpen = {this.handleOpen}
                />
            
            }

            {isError &&
                <div>
                    {error}
                </div>
            }

            
            </div>
    }
} 