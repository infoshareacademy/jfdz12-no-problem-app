import React from 'react';
import { Grid, Avatar, withStyles, } from '@material-ui/core';

const styles = {
    gridStyleAvatar: {
        padding: '20px',
    },
}

function UserAvatarData(props){

    const { user, classes } = props;
    
    return(
            <Grid xs={12} item container justify='center' alignItems='center' className={classes.gridStyleAvatar}>
                { user.avatar 
                    ? <Avatar src={user.avatar} variant="circle" style={{height:'50px', width:'50px'}} />
                    :<Avatar style={{padding:'7px'}} >
                        {user.name.slice(0,1).toUpperCase() }{user.surname.slice(0,1).toUpperCase()}
                    </Avatar>
                }
            </Grid>
        )
}

export default withStyles(styles)(UserAvatarData);