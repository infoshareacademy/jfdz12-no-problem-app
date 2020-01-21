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

const useStyles = makeStyles(theme => ({
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
}));

function MenuAppBar(props) {
	const classes = useStyles();
	const matches = useMediaQuery('(max-width:600px)');
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [myStyle, setMystyle] = React.useState('rgba(255,255,255, 0.3)'); //to jest do window.scroll
	const open = Boolean(anchorEl);
	const [auth, setAuth] = React.useState(false);
	// let style = props.styleColor;
	// let style = {backgroundColor:'rgba(255,255,255, 0.3)'};

	// to chyba niepotrzbene ale nie wiem   
	// const changeCol = () => {
	//    if (window.pageYOffset <10) {
	//      style={backgroundColor:'white'};
	//    } else {
	//     style={backgroundColor:'red'}; 
	//    }
	// }

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

	const handleChange = () => {
		setAuth(!auth);
		setAnchorEl(null);
		props.history.push('/')
	};

	const handleMenu = event => {
		setAnchorEl(event.currentTarget)
	};

	const handleClose = () => {
		setAnchorEl(null)
	};


	const log = () => {
		setAuth(!auth);
		//props.history.push('/')
	}

	let content;

	if (auth && matches) {
		content = <SmallLogIn
			auth={auth}
			log={log}
			handleChange={handleChange}
			handleClose={handleClose}
			handleMenu={handleMenu}
			open={open}
			anchorEl={anchorEl}
		/>;
	};
	if (!auth && matches) {
		content = <SmallLogOut
			auth={auth}
			log={log}
			handleChange={handleChange}
			handleClose={handleClose}
			handleMenu={handleMenu}
		/>
	};
	if (auth && !matches) {
		content = <BigLogIn log={log} />
	};
	if (!auth && !matches) {
		content = <BigLogOut log={log} />
	}


	return (

		<div className={classes.root} position="static">

			<AppBar className={classes.navStyle} style={{ backgroundColor: myStyle }} >

				{content}

			</AppBar>

		</div>
	);
}

export default withRouter(MenuAppBar);