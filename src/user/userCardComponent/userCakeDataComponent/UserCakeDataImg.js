import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Grid, } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    img : {
        width:'100%', 
        maxWidth:'100px',
        height:'70px',
    },    
})


export function UserCakeDataImg(props) {
    const { cake } = props;
    const classes = useStyles(); 

    return (<>
        <Grid item sm={3} md={2} container justify='center' alignItems='center'>
            <Link to={`/cake/${cake.id}`}>
                <img src={cake.imgURL}
                    alt="cake foto"
                    className={classes.img}>
                </img>
            </Link>
        </Grid>

    </>)
}

