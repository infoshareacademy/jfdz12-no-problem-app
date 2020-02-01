import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core'

export function UserCakeDataDelButton(props) {

    return <div>
        <IconButton
            aria-label="delete"
        >
            <DeleteIcon />
        </IconButton>

    </div>
}