import React from 'react';
import { TextField, Avatar, } from '@material-ui/core';

export default function CookData(props) {
    const { name, surname, city, district, street, description } = props;

    return (<>
        <div style ={{display:'flex', justifyContent:'center', margin:'12px 0'}}>
            <Avatar style={{padding:'7px'}} >
                {name.slice(0,1).toUpperCase() }{surname.slice(0,1).toUpperCase()}
            </Avatar>
            
        </div>
        <TextField
            onChange={props.onHandleChange}
            variant="outlined"
            required
            fullWidth
            name="city"
            label="miasto"
            placeholder="podaj miasto"
            type="TextField"
            value={city}
            margin='normal'
        />
        <TextField
            onChange={props.onHandleChange}
            variant="outlined"
            fullWidth
            name="district"
            placeholder="podaj dzielnice"
            label="dzielnica"
            type="TextField"
            value={district}
            margin='normal'
        />
        <TextField
            onChange={props.onHandleChange}
            variant="outlined"
            fullWidth
            name="street"
            label="ulica"
            type="TextField"
            value={street}
            margin='normal'
        />
        <TextField
            onChange={props.onHandleChange}
            variant="outlined"
            required
            fullWidth
            name="description"
            label="Opis"
            type="TextField"
            value={description}
            margin='normal'
            multiline
            rows={3}
        />

    </>)

}