import React from 'react';
import { TextField, Avatar,Button } from '@material-ui/core';

export default function CookData(props) {
    const { name, avatar, city, district, street, description } = props;

    return (<>
        <div style ={{display:'flex', justifyContent:'center'}}>
            <Avatar style={{backgroundColor: 'red'}} >
                {name.slice(0,1)}
            </Avatar>
            <input
                accept="image/*"
                style={{display:'none'}}
                id="outlined-button-file"
                type="file"
                onChange = {props.onHandleFileAdd}
            />
            <label htmlFor="outlined-button-file" >
                <Button variant="outlined" component="span" style={{margin: '10px'}} >
                    dodaj zdjęcie
                </Button>
            </label>
            
            
        </div>
        <TextField
            onChange={props.onHandleChange}
            variant="outlined"
            required
            fullWidth
            name="avatar"
            label="avatar"
            placeholder="avatar"
            type="TextField"
            value={avatar}
            margin='normal'
        />
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