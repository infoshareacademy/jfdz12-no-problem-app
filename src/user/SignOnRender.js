import React from 'react';
import { Grid, Typography, Button, withStyles, Avatar } from '@material-ui/core';
import MySelect from './signComponent/MySelect';
import { USERTYPE } from '../constans/selectConstans';
import BasicData from './signComponent/BasicData';
import ContactData from './signComponent/ContactData';
import CookData from './signComponent/CookData';
import { styles } from './styles/SignOnStyles'

function SignOnRender(props) {
    const { classes } = props;
    const { gender, name, surname, mobile, password, email, description,
            nick, userType, city, street, district, avatar, isRequired } = props.state;
    
    return (
        <Grid
            container
            justify='center'
            width="xs"
            className={classes.root}
        >
            <form className={classes.paper} >
                <Typography component="h1" variant="h5">
                    Rejestracja
                </Typography>
                <div style ={{display:'flex', justifyContent:'center', margin:'12px 0'}}>
                    <Avatar style={{padding:'7px'}} >
                        {name.slice(0,1).toUpperCase() }{surname.slice(0,1).toUpperCase()}
                    </Avatar>
                </div>
                <MySelect
                    onHandleChange={props.onHandleChange}
                    name='userType'
                    value={userType}
                    options={USERTYPE}
                    label='rodzaj użytkownika'
                    align='left'
                    width='300px'
                    labelWidth={125}
                />
                <Grid container xs={12} item wrap='wrap'>
                    <Grid item xs={12} sm={6} className={classes.subGrid}>
                        <ContactData
                            onHandleChange={props.onHandleChange}
                            email={email}
                            password={password}
                            mobile={mobile}
                            isRequired={isRequired}
                        />
                        {userType === 'cook'
                            ?<BasicData
                                onHandleChange={props.onHandleChange}
                                name={name}
                                surname={surname}
                                nick={nick}
                                gender={gender}
                                isRequired={isRequired}
                            />
                            : ""
                        }

                    </Grid>
                    {userType === 'cook'
                        ? <Grid item xs={12} sm={6} className={classes.subGrid}>
                            <CookData
                                onHandleChange={props.onHandleChange}
                                onHandleFileAdd = {props.onHandleFileAdd}
                                avatar={avatar}
                                city={city}
                                street={street}
                                district={district}
                                name={name}
                                surname={surname}
                                description={description}
                                userType={userType}
                                isRequired={isRequired}
                            />
                        </Grid>
                        : <Grid item xs={12} sm={6} className={classes.subGrid}>
                            <BasicData
                                onHandleChange={props.onHandleChange}
                                name={name}
                                surname={surname}
                                nick={nick}
                                gender={gender}
                                isRequired={isRequired}
                            />
                        </Grid>
                    }

                </Grid>
                <Grid xs={12} item>
                    <Button
                        type='submit'
                        fullWidth
                        name='userId'
                        variant="contained"
                        className={classes.submit}
                        onClick={props.onHandleOnClick}
                    >
                        Zapisz
                    </Button>
                </Grid>

            </form>
        </Grid>
    )

}

export default withStyles(styles)(SignOnRender);