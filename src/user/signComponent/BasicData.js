import React from 'react';
import { TextField, } from '@material-ui/core';
import MySelect from './MySelect';
import { GENDERSELECT, } from '../../constans/selectConstans';


export default function BasicData(props) {
    const {nick, name, surname, gender} = props;

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