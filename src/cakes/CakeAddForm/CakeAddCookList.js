import React from 'react';
import { Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText} from '@material-ui/core'
import { MenuItem, Button, } from '@material-ui/core'

export function CakeAddCookList(props) {
    return(
        <Dialog
            open={props.cookList}
            onClose={props.onHandleClickOpen}
            scroll={'paper'}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
        >
            <DialogTitle id="scroll-dialog-title">Lista kucharzy</DialogTitle>
            
            <DialogContent dividers={true}>
                <DialogContentText id="scroll-dialog-description" tabIndex={-1}>

                    {props.cooks.map((cook) =>(
                        <MenuItem key={cook.id} onClick={() => props.onHandleSelectCook(cook.id)}>
                            {cook.name} {cook.surname} {cook.location.city}
                        </MenuItem>
                        ))
                    }
                
                </DialogContentText>
            </DialogContent>

            <DialogActions>
                <Button onClick={props.onHandleClickOpen} color="primary">
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>

    )

} 