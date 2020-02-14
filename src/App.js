import React from 'react';
import CakesList from './cakes/CakesList';
import './App.css';
import Dashboard from './dashboard/Dashboard';
import CooksList from './cooks/CooksList';
import { BrowserRouter, Route, } from 'react-router-dom';
import MenuAppBar from './menu/resMenu/MenuAppBar';
import UserCard from './user/UserCard';
import SignIn from './user/SignIn';
import SignOn from './user/SignOn';
import CakeAddForm from './cakes/CakeAddForm/CakeAddForm';
import CakeCardFull from './cakes/cakeCard/CakeCardFull';
import {initializeApp } from "firebase";
import { connect } from 'react-redux';
import { checkUserAuthInFirebase } from './state/user';
import MessageSnackbar from './components/MessageSnakebar';
import { stopSnack } from './state/snackbar'; 

const firebaseConfig = {
    apiKey: "AIzaSyB1hXtUkKyvnejEmMe9VQjb_sj67zZf-Ng",
    authDomain: "aleciachaapp.firebaseapp.com",
    databaseURL: "https://aleciachaapp.firebaseio.com",
    projectId: "aleciachaapp",
    storageBucket: "aleciachaapp.appspot.com",
    messagingSenderId: "946106450467",
    appId: "1:946106450467:web:e4b62a740d70364f02a796"
};
// Initialize Firebase
initializeApp(firebaseConfig);


class App extends React.Component {
	
	componentDidMount() {
		this.props.checkUserAuthInFirebase();
	}

	handleClose = () =>{
		this.props.stopSnack();
	}

	render() {
		const {message, backColor, open } = this.props;
		return (<>
			{open && <MessageSnackbar
				onHandleClose={this.handleClose}
				open={open}
				message={message}
				backColor={backColor}
			/>}
			<div className="App">
	
				<BrowserRouter>
					<MenuAppBar />
					<Route path='/userCard' component={UserCard} />
					<Route path='/cakes' component={CakesList} />
					<Route path='/cakeAdd/:id' component={CakeAddForm} />
					<Route path='/cake/:id' component={CakeCardFull} />
					<Route path='/cooks' component={CooksList} />
					<Route path='/SignIn' component={SignIn} />
					<Route path='/SignOn' component={SignOn} />
					<Route exact path='/' component ={Dashboard} />
					{/* <Redirect to="/"/> */}
				</BrowserRouter>
			</div>
		</>)
	}

}


const mapDispatchToProps = {
	checkUserAuthInFirebase,
	stopSnack,
};

const mapStateToProps = state => ({
	backColor: state.snackbarReducer.snackOptions.backColor,
	message: state.snackbarReducer.snackOptions.message,
	open: state.snackbarReducer.open,
});
  


export default connect( mapStateToProps, mapDispatchToProps )(App) ;
