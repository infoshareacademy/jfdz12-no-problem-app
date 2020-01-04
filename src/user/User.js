import React from 'react';
import { getUsers } from '../api/Api'
import { Button } from '@material-ui/core';
import { UserList } from './UserList';
import { UserCard } from './UserCard';

export class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,   
            isError: false,
            error: '',
            users: [],
            openUserCard: false,
            openUserList: false,
            userId: null,
        }
        this.handleOpenUser = this.handleOpenUser.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
    }

    componentDidMount(){
   
        this.setState({
            isLoading: true,
            isError: false,
        }, () => getUsers()
            .then( data => {
                this.setState ({
                    users: data,
                    isLoading: false,  
                })
            })
            .catch (error => {
                this.setState({
                    isError: true,
                    error: `błąd: ${error.toString()}`,
                    isLoading: false,
                })
            }))
    }

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

    addIdToSesionStorage(userId){
        sessionStorage.setItem('userId', userId);
    }

    getIdFromSesionStorage(){
        sessionStorage.getItem('userId');
    }


    findDataById = (data, id) => data.find((data) => data.id === id) || {};
    
    render(){
        const { userId, openUserCard, openUserList, users, isLoading, error, isError} = this.state;
        
        return <div style={{marginTop:'100px'}}>
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