import React from 'react';
import { CircularProgress, } from '@material-ui/core';
import { CakesList } from './cakes/CakesList';
import './App.css';
import Dashboard from './dashboard/Dashboard';
import CooksList from './cooks/CooksList';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import MenuAppBar from './menu/resMenu/MenuAppBar';
import UserCard from './user/UserCard';
import SignIn from './user/SignIn';
import SignOn from './user/SignOn';
import CakeAddForm from './cakes/CakeAddForm/CakeAddForm';
import CakeCardFull from './cakes/CakeCardFull';
import { getCakes } from './api/Api2';
import firebase from "firebase";

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
firebase.initializeApp(firebaseConfig);


class App extends React.Component {
	constructor() {
		super();
		this.state = {
			userId: '',
			isLoading: true,
			isError: false,
			error: '',
			cakes: [],
			cooks: [],
		};

	}

	componentDidMount() {
		getCakes()
			.then(data => this.setState({ cakes: data }))
			.catch(error => console.log(`Nie mogę pobrać danych cakes ${error.toString()}`))
			.finally(() => this.setState({ isLoading: false }));
	}

	render() {
		const { isLoading, isError, error } = this.state;

		if (isLoading && !isError) {
			return (
				<div className="App">
					<CircularProgress color="secondary" />
				</div>
			)
		}

		if (isError) {
			return (
				<div className="App"> {error} </div>
			)
		}

		if (!isLoading && !isError) {
			return (
				<div className="App">
					<BrowserRouter>
						<MenuAppBar />
						<Route exact path='/'>
							<Dashboard cakes={this.state.cakes} cooks={this.state.cooks} />
						</Route>
						<Route path='/userCard' component={UserCard} />
						<Route path='/cakes' component={CakesList} />
						<Route path='/cakeAdd/:id' component={CakeAddForm} />
						<Route path='/cake/:id' component={CakeCardFull} />
						<Route path='/cooks' component={CooksList} />
						<Route path='/SignIn' component={SignIn} />
						<Route path='/SignOn' component={SignOn} />
						{/* <Redirect to="/"/> */}
					</BrowserRouter>
				</div>
			)
		}


	}

}

export default App;
