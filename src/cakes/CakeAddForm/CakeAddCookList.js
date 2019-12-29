import React from 'react';
import { Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText} from '@material-ui/core'
import { Button, } from '@material-ui/core'
import {TableBody, Table, TableHead, TableRow, TableCell } from '@material-ui/core'
//import TableContainer from '@material-ui/core/TableContainer';

export function CakeAddCookList(props) {
    return(
        <Dialog
            open={props.cookList}
            onClose={props.onHandleClickOpen}
            scroll={'paper'}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
        >
            <DialogTitle id="scroll-dialog-title">Lista cukierników</DialogTitle>
            
            <DialogContent dividers={true}>
                <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
                    <Table size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Imie</TableCell>
                                <TableCell align="left">Nazwisko</TableCell>
                                <TableCell align="center">Miasto</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {props.cooks.map(cook => (
                            <TableRow hover key={cook.id} onClick={() => props.onHandleSelectCook(cook.id)}>
                                <TableCell align='left' component="th" scope="row"> {cook.name} </TableCell>
                                <TableCell align='left'>{cook.surname}</TableCell>
                                <TableCell align="center">{cook.location.city}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
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



// {props.cooks.map((cook) =>(
//     <MenuItem key={cook.id} onClick={() => props.onHandleSelectCook(cook.id)}>
//         {cook.name} {cook.surname} {cook.location.city}
//     </MenuItem>
//     ))
// }

