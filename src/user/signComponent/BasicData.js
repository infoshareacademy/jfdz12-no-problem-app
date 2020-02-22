import React from 'react';
import { TextField, } from '@material-ui/core';
import MySelect from './MySelect';
import { GENDERSELECT, } from '../../constans/selectConstans';


export default function BasicData(props) {
    const {nick, name, surname, gender, isRequired} = props;

    return (<>
        <TextField
            onChange={props.onHandleChange}
            variant="outlined"
            required
            fullWidth
            name="nick"
            label="nick"
            placeholder="podaj nick"
            type="TextField"
            value={nick}
            margin='normal'
            error={isRequired && nick===''}
            helperText={isRequired && nick==='' && "Pole jest wymagane"}
        />
        <TextField
            onChange={props.onHandleChange}
            variant="outlined"
            required
            fullWidth
            name="name"
            label="imię"
            placeholder="podaj imię"
            type="TextField"
            value={name}
            margin='normal'
            error={isRequired && name===''}
            helperText={isRequired && name==='' && "Pole jest wymagane"}
        />
        <TextField
            onChange={props.onHandleChange}
            variant="outlined"
            required
            fullWidth
            name="surname"
            placeholder="podaj nazwisko"
            label="nazwisko"
            type="TextField"
            value={surname}
            margin='normal'
            error={isRequired && surname===''}
            helperText={isRequired && surname==='' && "Pole jest wymagane"}
        />
        <MySelect
            onHandleChange={props.onHandleChange}
            name='gender'
            value={gender}
            options={GENDERSELECT}
            label='płeć'
            align='left'
            width='100%'
            labelWidth={30}
        />

    </>)

}