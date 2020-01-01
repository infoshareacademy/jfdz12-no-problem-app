import React from 'react';
import { Button } from '@material-ui/core';

export function UserCard (props){

    return (
        <div>
            <h1>user Card</h1>
            <div> {props.user.name} {props.user.contact.mail}</div>
            < Button 
                variant='outlined'
                color = 'secondary'
                onClick = {() => props.onHandleOpen('openUserCard')}
            >
                zamknij
            </Button>
        </div>
    )   
}