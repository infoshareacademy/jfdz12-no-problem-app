import React from 'react';
import { Paper, Divider, MenuList, withStyles } from '@material-ui/core';
import UserMenuItem from './UserMenuItem'

const styles = {
    root:{
        '& .Mui-selected':{
            backgroundColor: '#F5F5F6', //'#e6fff3',
        },
        '& .Mui-selected:hover':{
            backgroundColor: '#ffcc9980',
        },
    },
    
}

function UserMenu(props){
    const {classes, userType} = props;

    return (
        <Paper>
            <MenuList className={classes.root}> 
                <UserMenuItem 
                    text="Dane podstawowe" 
                    menu="basic" 
                    onHandleClick={props.onHandleClick} 
                    selectedMenu={props.selectedMenu.basic}
                />

                { userType === "cook" &&
                    <div>
                        <Divider/>
                        <UserMenuItem 
                            text="Dane cukiernika" 
                            menu="mCook" 
                            onHandleClick={props.onHandleClick} 
                            selectedMenu={props.selectedMenu.mCook}
                        />
                    </div>
                }
                
                <Divider/>
                <UserMenuItem 
                    text="Twoje polubienia" 
                    menu="like" 
                    onHandleClick={props.onHandleClick} 
                    selectedMenu={props.selectedMenu.like}
                />
                
                { userType === "cook" &&
                    <div>
                        <Divider/>
                        <UserMenuItem 
                            text="Twoje ciasta" 
                            menu="mCake" 
                            onHandleClick={props.onHandleClick} 
                            selectedMenu={props.selectedMenu.mCake}
                        />
                    </div>
                }
            </MenuList>
            
        </Paper>
    )

}

export default withStyles(styles)(UserMenu);