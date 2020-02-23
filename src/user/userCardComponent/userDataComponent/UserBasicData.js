import React from 'react';
import { Grid, InputLabel, TextField, makeStyles } from '@material-ui/core';
import { UserSelect } from './UserSelect';
import { GENDERSELECT } from '../../../constans/selectConstans';

const useStyles = makeStyles(theme => ({
    root:{
        '& .MuiInputBase-root':{
            fontSize: '18px',
        },
        '& .MuiInputBase-root.Mui-disabled':{
            color: 'rgba(0, 0, 0, 0.87)',
        },
        '& .MuiInputBase-input' :{
            [theme.breakpoints.down('sm')]: {
                textAlign: 'center',
            },
        }
    },
    textLeft: {
        padding: '10px',
        textAlign: 'left',   
        maxWidth: '300px',
        width: '100%',
        minWidth: '200px',
    },
    textRight:{
        padding: '17px 10px',
        maxWidth: '200px',
        width: '100%', 
        textAlign: 'right',
        fontSize: '16px',
        minWidth: '200px',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
        },
    },
    gridStyle:{
        padding: '0px 10px',
        boxSizing: 'border-box',  
        flexWrap: 'nowrap',
        [theme.breakpoints.down('sm')]: {
            flexWrap: 'wrap',
        },
    },
    gridStyleAvatar: {
        padding: '20px',
    },
}))

function UserBasicData(props){
    const classes = useStyles();
    const { noEdit } = props;
    const {nick, name, surname, gender, contact } = props.user;
   
    return(
        <Grid container direction='column' className={classes.root}>
            <Grid xs={12} item container justify="center" className={classes.gridStyle} >
                <InputLabel id="email" className={classes.textRight}> email : </InputLabel> 
                <TextField labelid="email" name="mail" className={classes.textLeft} 
                            disabled value={contact.mail}/>    
            </Grid>
            <Grid xs={12} item container justify="center" className={classes.gridStyle}>
                <InputLabel id="nick" className={classes.textRight}> Nick : </InputLabel> 
                <TextField labelid="nick" name="nick"  className={classes.textLeft} 
                           onChange={props.handleChange} disabled={noEdit} value= {nick}
                />    
            </Grid>
            <Grid xs={12} item container justify="center" className={classes.gridStyle}>
                <InputLabel id="name" className={classes.textRight}> imię : </InputLabel> 
                <TextField labelid="name" name="name" className={classes.textLeft} 
                            onChange={props.handleChange} disabled={noEdit} value= {name}/>    
            </Grid>
            <Grid xs={12} item container justify="center" className={classes.gridStyle}>
                <InputLabel id="surname" className={classes.textRight}> Nazwisko : </InputLabel> 
                <TextField labelid="surname" name="surname" className={classes.textLeft} 
                            onChange={props.handleChange} disabled={noEdit} value= {surname}/>    
            </Grid>
            <Grid xs={12} item container justify="center" className={classes.gridStyle}>
                <InputLabel id="gender" className={classes.textRight}> Płeć : </InputLabel> 
                <UserSelect
                    onHandleChange={props.handleChange}
                    name='gender'
                    value={gender}
                    options={GENDERSELECT }
                    align='left'
                    width='300px'
                    noEdit={noEdit}
                />
            </Grid>
            <Grid xs={12} item container justify="center" className={classes.gridStyle}>
                <InputLabel id="mobile"  className={classes.textRight}> telefon komórkowy : </InputLabel> 
                <TextField labelid="mobile" name="mobile"  className={classes.textLeft} 
                            onChange={props.handleChange} disabled={noEdit} value= {contact.mobile}/>    
            </Grid>
        </Grid>
        )
}

export default UserBasicData;