import React from 'react';
import { getUser } from '../api/userApi'
import { Button } from '@material-ui/core';
import { SignIn } from './SignIn';
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
            openSignIn: false,
            openUserCard: false,
            openUserList: false,
            email:'',
        }
        this.handleOpenUserCard = this.handleOpenUserCard.bind(this);
    }



    componentDidMount(){
   
        this.setState({
            isLoading: true,
            isError: false,
        }, () => getUser()
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

    
    handleOpen = (name) => {  
        this.setState( prevState=> ({
            [name]: !prevState[name],
        }))
    }

    handleOpenUserCard (){
        this.setState(prevState => ( {
            openSignIn: !prevState.openSignIn,
            openUserCard: !prevState.openUserCard,
        }))
    }

    handleInput = (event) => {
        this.setState ({
            [event.target.name]: event.target.value,
        })           
    }

    findDataById = (data, id) => data.find((data) => data.id === id) || {};
    
    findUserById (){
        const {users, email} = this.state;
        return users.find((user) => user.contact.mail === email) || {};
    }

    render(){
        const { email, openUserCard, openSignIn, openUserList, users, isLoading, error, isError} = this.state;
        
        return <div>
            <Button 
                variant='outlined' 
                onClick = {() => this.handleOpen('openUserList')}
                style = {{margin:'10px'}}
            >
                {openUserList ? 'ukryj listę uzytkowników' : 'pokaż listę użytkowników'}
            </Button>
            <Button 
                variant='outlined' 
                onClick = {() => this.handleOpen('openSignIn')} 
                style = {{margin:'10px'}}
            >
                pokaż dane użytkownika
            </Button>            
            <SignIn
                onHandleInput = {this.handleInput}
                openSignIn = {openSignIn}
                email={email}
                onHandleOpenUserCard = {this.handleOpenUserCard}
            />
            {!isLoading && openUserList &&
                <UserList 
                    users = {users}
                
                />
            }

            {!isLoading && openUserCard &&
                <UserCard 
                    user = {this.findUserById()}
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