import React from 'react';
import { TextField, } from '@material-ui/core';

export default function ContactData(props) {
    const { mobile, email, password, isRequired } = props;

    return (<>
        <TextField
            onChange={props.onHandleChange}
            variant="outlined"
            placeholder="email"
            required
            fullWidth
            label="e-mail"
            name="email"
            value={email}
            margin='normal'
            autoComplete="off"
            error={isRequired && email===''}
            helperText={isRequired && email==='' && "Pole jest wymagane"}
        />
        <TextField
            onChange={props.onHandleChange}
            variant="outlined"
            required
            fullWidth
            placeholder="podaj hasło"
            name="password"
            label="hasło"
            type="password"
            value={password}
            margin='normal'
            autoComplete="new-password"
            error={isRequired && password===''}
            helperText={isRequired && password==='' && "Pole jest wymagane"}
        />
        <TextField
            onChange={props.onHandleChange}
            variant="outlined"
            required
            fullWidth
            name="mobile"
            label="telefon komórkowy"
            type="TextField"
            value={mobile}
            margin='normal'
            error={isRequired && mobile===''}
            helperText={isRequired && mobile==='' && "Pole jest wymagane"}
        />

    </>)

}