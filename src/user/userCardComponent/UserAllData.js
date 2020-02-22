import React, { useState } from 'react';
import { makeStyles, Paper, CircularProgress, Grid, Button, InputLabel } from '@material-ui/core';
import UserBasicData from './userDataComponent/UserBasicData';
import UserCookData from './userDataComponent/UserCookData';
import UserAvatarData from './userDataComponent/UserAvatarData';
import { updateUserFetch } from '../../api/Api2';
import { USERTYPE } from '../../constans/selectConstans';
import { UserSelect } from './userDataComponent/UserSelect';
import { storage } from 'firebase';
import { startSnack } from '../../state/snackbar'; 
import { connect } from 'react-redux';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    paper:{
        backgroundColor: '#fce4ec50',
    },
    login: {
        padding: '20px',
    },
    button:{
        margin:'10px 20px',
        width: '80px',
    },
    gridStyle:{
        padding: '20px 10px',
        boxSizing: 'border-box',  
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
    nowrap:{
        flexWrap: 'nowrap',
        [theme.breakpoints.down('sm')]: {
            flexWrap: 'wrap',
        },
    },
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
        },
      
    },
}));

const UserAllData = (props) => {
    const [user, setUser] =  useState(props.user);
    const [isLoading, setIsLoading] = useState( false);
    const [noEdit, setNoEdit] = useState(true);
    const classes = useStyles();

    const handleFileAdd = (event) => {
        const file =  event.target.files[0];
        const fileName = file.name;
        
        storage().ref(`avatars/${Date.now()}${fileName}`)
            .put(file)
            .then((res) => {
                res.ref.getDownloadURL().then(url => {
                    setUser(prevUser => ({
                                ...prevUser,
                                avatar : url, 
                            }
                        ))
                });
            })
    }

    const handleOnEdit = () =>{
        setNoEdit(false);
    }

    const handleOnSave = () => {
        setIsLoading(true);
        const userId = user.id;
        const updateUser = { ...user, id: null};
      
        updateUserFetch(userId, updateUser)
            .then(res => {
                console.log('update user:', res);
                props.startSnack('dane zostały zaktualizowane', 'success');
            })
            .catch(error => console.log('error', error.message))
            .finally(() => {
                        setIsLoading( false);
                        setNoEdit(true);
                })
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        if(name === 'mobile'){
            setUser(prevUser =>({ 
                    ...prevUser,
                    contact: {...prevUser.contact, [name]: value }
                }));
            }else if(name === 'city' || name === 'street' || name==='district' ){
                setUser(prevUser =>({ 
                        ...prevUser,
                        location: {...prevUser.location, [name]: value }
                    }));
            }else{
                setUser(prevUser => ({...prevUser, [name]: value }));
        }
    }

    const handleChangeUserType = (event) =>{
        setUser(prevUser =>({
                ...prevUser, 
                location: prevUser.location ? prevUser.location : { city: "", district: "", street: ""},
                userType: event.target.value, 
            }
        ))
    };

    const handleDeleteAvatar = () =>{
        setUser(prevUser => ({...prevUser, avatar:null }));
    }

    if (isLoading) {
        return(
            <Paper className={classes.paper}> 
                <CircularProgress className={classes.login} color="secondary" />
            </Paper>
        )  
    }

    return (<>
        <Paper className={classes.paper}>
            <Grid container justify="center" alignItems="center" className={classes.gridStyle}>
                <Button onClick={handleOnEdit}  
                        variant='outlined' 
                        color="secondary" 
                        className={classes.button}
                >
                    Edycja
                </Button>
                <Button onClick={handleOnSave} 
                        className={classes.button}
                        variant='outlined' 
                        color="primary"
                        disabled={noEdit}
                >
                    Zapis
                </Button>
            </Grid>
            <Grid container justify="center" alignItems="center" className={clsx(classes.root,classes.nowrap)} >
                <InputLabel className={classes.textRight}> Typ użytkownika : </InputLabel>
                <UserSelect
                    onHandleChange={handleChangeUserType}
                    name='userType'
                    value={user.userType}
                    options={USERTYPE}
                    align='left'
                    width='300px'
                    noEdit={noEdit}
                />
            </Grid>
            <UserAvatarData avatar={user.avatar} name={user.name} surname={user.surname} 
                            noEdit={noEdit} 
                            handleDeleteAvatar={handleDeleteAvatar} 
                            handleFileAdd={handleFileAdd}
            />
            <UserBasicData user={user} noEdit={noEdit} handleChange={handleChange}/>
            {user.userType === 'cook' &&
                    <UserCookData user={user} noEdit={noEdit} 
                        handleChange={handleChange}
                    />
            }
        </Paper>
    </> )
}

const mapDispatchToProps = {
	startSnack,
};

export default connect( null, mapDispatchToProps)(UserAllData);




// class UserAllData extends React.Component{
//     constructor(props){
//         super(props);
//         this.userId = props.user.id;  
//         this.state = {
//             user: props.user,
//             isLoading: false,
//             loginUser: false,
//             noEdit: true,
//             isUpdate: false,
//             file: null,
//         }
//     }

//     handleFileAdd = (event) => {
//         const file =  event.target.files[0];
//         const fileName = file.name;
        
//         storage().ref(`avatars/${Date.now()}${fileName}`)
//             .put(file)
//             .then((res) => {
//                 res.ref.getDownloadURL().then(url => {
//                     this.setState(prevState => ({
//                             user:{
//                                 ...prevState.user,
//                                 avatar : url, 
//                             },
//                         }))
//                 });
//             })
//     }

//     handleOnEdit = () =>{
//         this.setState({noEdit: false });
//     }

//     handleOnSave = () => {
//         this.setState({isLoading: true});

//         updateUserFetch(this.userId, this.state.user)
//             .then(res => {
//                 console.log('update user:', res);
//                 this.props.startSnack('dane zostały zaktualizowane', 'success');
//             })
//             .catch(error => console.log('error', error.message))
//             .finally(() => {
//                     this.setState({
//                         isLoading: false,
//                         isUpdate: true,
//                         noEdit: true,
//                     });
//                 })
//     }

//     handleChange = (event) => {
//         const { name, value } = event.target;
        
//         if(name === 'mobile'){
//             this.setState(prevState =>({ 
//                 user: { 
//                     ...prevState.user,
//                     contact: {...prevState.user.contact, [name]: value }
//                 }}));
//             }else if(name === 'city' || name === 'street' || name==='district' ){
//                 this.setState(prevState =>({ 
//                     user: { 
//                         ...prevState.user,
//                         location: {...prevState.user.location, [name]: value }
//                     }}));
//             }else{
//                 this.setState(prevState =>({user: {...prevState.user, [name]: value },}))
//         }
//     }

//     handleChangeUserType = (event) =>{
//         this.setState(prevState =>({
//             user: {
//                 ...prevState.user, 
//                 location: prevState.user.location ? prevState.user.location : { city: "", district: "", street: ""},
//                 userType: event.target.value, 
//             }
//         }))
//     };

//     handleSnakebarClose = () =>{
//         this.setState({isUpdate: false})
//     }

//     handleDeleteAvatar = () =>{
//         this.setState(prevState => ({user: {...prevState.user, avatar:null }}));
//     }


//     render(){
//         const { classes } = this.props;
//         const { user, isLoading, noEdit } = this.state;
    
//         if (isLoading) {
//             return(
//                 <Paper className={classes.paper}> 
//                     <CircularProgress className={classes.login} color="secondary" />
//                 </Paper>
//             )  
//         }

//         return (<>
//             <Paper className={classes.paper}>
//                 <Grid container justify="center" alignItems="center" className={classes.gridStyle}>
//                     <Button onClick={this.handleOnEdit}  
//                             variant='outlined' 
//                             color="secondary" 
//                             className={classes.button}
//                     >
//                         Edycja
//                     </Button>
//                     <Button onClick={this.handleOnSave} 
//                             className={classes.button}
//                             variant='outlined' 
//                             color="primary"
//                             disabled={noEdit}
//                     >
//                         Zapis
//                     </Button>
//                 </Grid>
//                 <Grid container justify="center" alignItems="center" className={classes.root} >
//                     <InputLabel className={classes.textRight}> Typ użytkownika : </InputLabel>
//                     <UserSelect
//                         onHandleChange={this.handleChangeUserType}
//                         name='userType'
//                         value={user.userType}
//                         options={USERTYPE}
//                         align='left'
//                         width='300px'
//                         noEdit={noEdit}
//                     />
//                 </Grid>
//                 <UserAvatarData avatar={user.avatar} name={user.name} surname={user.surname} 
//                                 noEdit={noEdit} 
//                                 handleDeleteAvatar={this.handleDeleteAvatar} 
//                                 handleFileAdd={this.handleFileAdd}
//                 />
//                 <UserBasicData user={user} noEdit={noEdit} handleChange={this.handleChange}/>
//                 {user.userType === 'cook' &&
//                         <UserCookData user={user} noEdit={noEdit} 
//                             handleChange={this.handleChange}
//                         />
//                 }
//             </Paper>
//         </> )
//     }
// }

// const mapDispatchToProps = {
// 	startSnack,
// };

// export default connect( null, mapDispatchToProps)(withStyles(styles)(UserAllData));