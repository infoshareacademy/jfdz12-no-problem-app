import React from 'react';
import { Paper, Divider, MenuList, MenuItem, } from '@material-ui/core';

export function UserMenu(props){
    
    return (
        <Paper>
            <MenuList>
                <MenuItem onClick={() => props.onHandleClick('basic')} selected={props.selectedMenu.basic}>
                    <div className={'leftTextMenu'}> Dane podstawowe</div>    
                </MenuItem>
                <Divider variant='middle'/>
                <MenuItem onClick={() => props.onHandleClick('like')} selected={props.selectedMenu.like}>
                    <div className={'leftTextMenu'}> Twoje polubienia</div>
                </MenuItem>
            </MenuList>
        </Paper>
    )

}