import React from 'react';
import { Grid, Avatar, withStyles, Button, IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
    gridStyleAvatar: {
        padding: '20px',
    },
}


function UserAvatarData(props){

    const { user, classes, noEdit } = props;
    
    return(
            <Grid xs={12} item container justify='center' alignItems='center' className={classes.gridStyleAvatar}>
                {!noEdit && <>
                        <input
                            accept="image/*"
                            style={{ display: 'none' }}
                            id="outlined-button-file"
                            type="file"
                            onChange={props.handleFileAdd}
                        />
                        <label htmlFor="outlined-button-file" >
                            <Button variant="outlined" 
                                    component="span" 
                                    style={{ margin: '10px 40px' }} 
                                    color="primary"
                            >
                                {user.avatar ? "zmień" : "dodaj"}
                            </Button>
                        </label>
                    </>
                }
                { user.avatar 
                    ? <Avatar src={user.avatar} 
                                variant="circle" 
                                style={{height:'50px', width:'50px'}} 
                        />
                    :<Avatar style={{padding:'7px'}} >
                        {user.name.slice(0,1).toUpperCase() }{user.surname.slice(0,1).toUpperCase()}
                    </Avatar>
                }
                {!noEdit && <>
                        <IconButton 
                            style={{marginLeft: '40px'}}
                            onClick = {props.handleDeleteAvatar}
                            disabled={user.avatar ? false: true }
                        >
                            <DeleteIcon 
                                fontSize="large" 
                                color={user.avatar ? "secondary": "disabled"}
                            />
                        </IconButton>
                    </>
                }
            </Grid>
        )
}

export default withStyles(styles)(UserAvatarData);