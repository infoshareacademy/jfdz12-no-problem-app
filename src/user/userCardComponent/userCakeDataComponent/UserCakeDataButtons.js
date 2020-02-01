import React from 'react';
import { Grid, Tooltip, IconButton, } from '@material-ui/core';
import { Link } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import { UserCakeDataDelButton } from './UserCakeDataDelButton'


export function UserCakeDataButtons(props) {
    const { cake } = props;
   
    return (<>
        <Grid xs={12} md={1}
            item
            container
            justify='center'
            alignContent='center'
            direction='column'
        >
            <Tooltip title="edycja ciasta" placement="left">
                <IconButton
                    aria-label="edit"
                    component={Link}
                    to={`/cakeAdd/${cake.id}`}
                >
                    <EditIcon />
                </IconButton>
            </Tooltip>
            <UserCakeDataDelButton
                handleOnDelete={props.handleOnDelete}
                cakeId={cake.id}
                cake={cake}
            />
        </Grid>
    </>)
}

