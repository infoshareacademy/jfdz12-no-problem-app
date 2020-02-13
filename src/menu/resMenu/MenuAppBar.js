import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core/';
import BigLogOut from './BigLogOut';
import BigLogIn from './BigLogIn';
import SmallLogIn from './SmallLogIn';
import SmallLogOut from './SmallLogOut';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { withRouter } from 'react-router-dom';
import { useEffect } from 'react'
import {auth as fbauth } from 'firebase/app';
import { connect } from 'react-redux';
import { clearUserInStore } from '../../state/user'

const useStyles = makeStyles({
	root: {
		flexGrow: 1,

	},
	logo: {
		maxWidth: '170px',
		paddingLeft: '45px',
	},
	label: {
		fontSize: 15,
	},

	navStyle: {
		top: 0,
		left: "auto",
		right: 0,
		position: "fixed",
		color: "#757575",
		zIndex: 100,
		minWidth: '300px',
	},
	flex: {
		display: "flex",
		justifyContent: "space-between"
	}
});

function MenuAppBar(props) {
	const classes = useStyles();
	const matches = useMediaQuery('(max-width:600px)');
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [myStyle, setMystyle] = React.useState('rgba(255,255,255, 0.3)'); //to jest do window.scroll
	const open = Boolean(anchorEl);
	const [auth, setAuth] = React.useState(false);

	//ta funckja jest do window.scroll
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});

	//ta funckja jest do window.scroll
	const handleScroll = () => {
		setMystyle(
			window.pageYOffset === 0 ? 'rgba(255,255,255, 0.3)' : 'white',
		);
	};

	useEffect(() => {
		setAuth(props.userIdInStore ? true : false);
	},[props.userIdInStore]);

	const handleChange = () => {
		setAnchorEl(null);
		props.history.push('/')
	};

	const handleMenu = event => {
		setAnchorEl(event.currentTarget)
	};

	const handleClose = () => {
		setAnchorEl(null)
	};

	const handleSignOut = () => {
		fbauth().signOut();
		setAuth(false);
		props.history.push('/');
		props.clearUserInStore();
	}

	const content = () =>{
		if (auth && matches) {
			return <SmallLogIn
				auth={auth}
				log={handleSignOut}
				handleChange={handleChange}
				handleClose={handleClose}
				handleMenu={handleMenu}
				open={open}
				anchorEl={anchorEl}
				userType={props.userInStore.userType}
			/>;
		};
		if (!auth && matches) {
			return <SmallLogOut
				auth={auth}
				log={handleSignOut}
				handleChange={handleChange}
				handleClose={handleClose}
				handleMenu={handleMenu}
			/>
		};
		if (auth && !matches) {
			return <BigLogIn log={handleSignOut} userType={props.userInStore.userType} />
		};
		if (!auth && !matches) {
			return <BigLogOut log={handleSignOut} />
		}
	}

	return (
		<div className={classes.root} position="static">
			<AppBar className={classes.navStyle} style={{ backgroundColor: myStyle }} >
				{content()}
			</AppBar>
		</div>
	);
}
const mapStateToProps = (state) => ({
    userInStore: state.userReducer.user,
    userIdInStore: state.userReducer.userId, 
});

const mapDispatchToProps = {
    clearUserInStore,
};

export default connect(mapStateToProps, mapDispatchToProps) (withRouter(MenuAppBar));