import React from "react";
import {Table, TableBody, TableCell, TableRow, TableHead} from '@material-ui/core';

export function UserList(props){
    const {users} = props;

    return(<div style={{width:'800px', margin: '10px auto'}}>
        

        <Table size="small" aria-label="a dense table" >
            <TableHead>
            <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">name</TableCell>
                <TableCell align="right">surname</TableCell>
                <TableCell align="right">email</TableCell>
             </TableRow>
            </TableHead>
            <TableBody>
            {users.map(user => (
                <TableRow key={user.id}>
                <TableCell component="th" scope="row">
                    {user.id}
                </TableCell>
                <TableCell align="right">{user.name}</TableCell>
                <TableCell align="right">{user.surname}</TableCell>
                <TableCell align="right">{user.contact.mail}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    
    
    </div>
    )


}