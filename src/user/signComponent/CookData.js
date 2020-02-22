import React from 'react';
import { TextField,  } from '@material-ui/core';

export default function CookData(props) {
    const { city, district, street, description, isRequired, userType } = props;
    
    return (<>
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
            error={isRequired && city==='' && userType==='cook'}
            helperText={isRequired && city===''  && userType==='cook' && "Pole jest wymagane"}
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
            error= {isRequired && userType==='cook' && description===''}
            helperText= {isRequired && description==='' && userType==='cook' && "Pole jest wymagane"}
        />

    </>)

}