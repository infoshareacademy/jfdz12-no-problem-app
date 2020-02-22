import React, { useEffect, useState } from 'react';
import { Grid, Paper, Typography, Divider, makeStyles, CircularProgress } from '@material-ui/core';
import { UserCakeDataImg } from './userCakeDataComponent/UserCakeDataImg';
import { UserCakeDataBasic } from './userCakeDataComponent/UserCakeDataBasic';
import { UserCakeDataExtend } from './userCakeDataComponent/UserCakeDataExtend';
import { UserCakeDataButtons } from './userCakeDataComponent/UserCakeDataButtons';
import { getCakeWithTypeByCookId, getUsers } from '../../api/Api2';

const useStyles = makeStyles({
    grid: {
        padding: '5px',
    },
    wrapper: {
        width: '100%',
    },
});

export function UserCakeData(props) {
    
    const classes = useStyles(); 
    const [isCakes, setIsCakes] =  useState();
    const userId = props.userId;//sessionStorage.getItem('userId');
    const [cakes, setCakes] = useState([]);
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isUpdate, setIsUpdate] = useState(false);

    useEffect (() => {
        Promise.all([
            getCakeWithTypeByCookId(userId),
            getUsers(),
        ])
            .then(data => {
                setCakes(data[0]);
                setUsers(data[1]);
                setIsCakes(data[0].length > 0 ? true : false );
            })
            .catch(error => console.log('error', error.toString()))
            .finally(() => {
                setIsLoading(false);
                setIsUpdate(false);
            })            
        },[isUpdate, userId])
    
    const handleOnDelete = () =>{
        setIsUpdate(true);
    }

    if (isLoading) {
        return  <CircularProgress color="secondary" />
    }

    return (
        <Paper >
            <Typography variant='h6'>Twoje ciasta</Typography>
            {isCakes && 
                <Grid container >
                    {cakes.map((cake, idx) => {
                        const backColor = idx % 2 === 0 ? '#fce4ec50' : '';
                        
                        return (<div key={cake.id} className={classes.wrapper}>
                                    <Grid item xs={12}>
                                        <Divider />
                                    </Grid>
                                    <Grid xs container item
                                        className={classes.grid}
                                        style={{ backgroundColor: backColor }}
                                    >
                                        <UserCakeDataImg
                                            cake={cake}
                                        />
                                        <Grid item xs
                                            container
                                            direction='row'
                                            alignItems='flex-start'
                                            wrap='wrap'
                                        >
                                            <UserCakeDataBasic
                                                cake={cake}
                                            />
                                            <UserCakeDataExtend
                                                cake={cake}
                                            />
                                            <UserCakeDataButtons 
                                                cake={cake}
                                                users={users}
                                                handleOnDelete={handleOnDelete}
                                            />
                                        </Grid>
                                    </Grid>

                                </div>)
                            })}
                </Grid>
            }
        </Paper>
    )
}

