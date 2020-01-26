import React from 'react';
import { Grid, Paper, Typography, Divider, withStyles, Avatar, Box, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';

const styles = {
    img : {
        width:'100%', 
        maxWidth:'100px',
        height:'70px',
    },
    grid:{
        padding: '5px',
    },
    text:{
        paddingLeft:'10px',
        textAlign: 'left',
    },
    
    wrapper:{
        width:'100%',
    },
    avatar: {
        fontSize: '10px',
        fontWeight: 'bold',
        width: 60,
        height: 20,
        marginLeft:'10px',
    }
    
}

function UserCakeData(props){

    const {cakes, classes} = props;

    const cakesToRender = () => {
        if(cakes.length>0){
            return cakes.map ((cake,idx) => {
                const backColor = idx % 2 === 0 ? '#fce4ec50' : '';

                return (<div key={cake.id} className={classes.wrapper}>
                    <Grid item xs={12}>
                       <Divider/>
                    </Grid>
                    
                    <Grid xs container item 
                        className={classes.grid} 
                        style ={{backgroundColor: backColor}}
                    >
                        
                        <Grid item sm={3} md={2} container justify='center' alignItems='center'>
                            <Link to={`/cake/${cake.id}`}>
                                <img src = {cake.imgURL} 
                                    alt="cake foto" 
                                    className={classes.img}>    
                                </img>
                            </Link>
                           
                        </Grid>
                            
                        <Grid item xs
                            container 
                            direction='row' 
                            alignItems='flex-start'
                            wrap='wrap'
                        > 
                            <Grid item 
                                container 
                                justify='space-between' 
                                alignContent='flex-start'
                                direction='column'
                                xs={12} md={6}
                                wrap='wrap'
                                style = {{minWidth: '200px'}}
                            >
                                <Grid item container alignItems='flex-start' direction='column'>
                                    <Grid item container 
                                        alignItems='center' 
                                        justify='flex-start' 
                                        className={classes.grid}
                                    >
                                        <div className={classes.text}>
                                            <span>ciasto: </span> 
                                            <Box component = 'span' fontWeight={500} >
                                                {cake.name}
                                            </Box>
                                        </div>
                                    </Grid>
                                    <Grid item container 
                                        alignItems='center' 
                                        justify='flex-start' 
                                        className={classes.grid}
                                    >
                                        <div className={classes.text}>
                                            opis: {cake.description}
                                        </div>
                                        
                                    </Grid>
                                    <Grid container alignItems='center' className={classes.grid}>
                                        <div className={classes.text}>typ ciasta: </div>
                                        <Avatar 
                                            conponent = 'span'
                                            variant="rounded" 
                                            className = {classes.avatar} 
                                            style={{backgroundColor: cake.type.color}}
                                        >
                                            <div >{cake.type.name}</div> 
                                        </Avatar>
                                    </Grid>
                                </Grid >
                            </Grid>
                            <Grid item 
                                container 
                                justify='space-between' 
                                alignContent='flex-start'
                                direction='column'
                                xs ={12} md={5}
                                wrap='wrap'
                            >
                                <Grid item container 
                                    alignItems='center' 
                                    justify='flex-start' 
                                    className={classes.grid}
                                >
                                    <div className={classes.text}>
                                        <span>cena za kg: </span> 
                                        <Box component = 'span' fontWeight={500} >
                                            {cake.price}
                                        </Box>
                                    </div>
                                </Grid>
                                <Grid item container 
                                    alignItems='center' 
                                    justify='flex-start' 
                                    className={classes.grid}
                                >
                                    <div className={classes.text}>
                                        cena za porcję: {cake.priceForPortion}
                                    </div>
                                    
                                </Grid>
                                <Grid item container 
                                    alignItems='center' 
                                    justify='flex-start' 
                                    className={classes.grid}
                                >
                                    <div className={classes.text}>
                                        porcja: {cake.portionDescription}
                                    </div>
                                    
                                </Grid>
                            </Grid>
                            <Grid xs={12} md={1} 
                                item 
                                container 
                                justify='center' 
                                alignContent='center'
                                direction='column'
                            >
                                <IconButton 
                                    aria-label="edit"
                                    component ={Link} 
                                    to= {`/cakeAdd/${cake.id}`} 
                                >
                                    <EditIcon/>
                                </IconButton>
                            </Grid> 
                        </Grid>  
                    </Grid>
                    
                   </div> )})
        }else{ return "" }
    }

    return (
        <Paper >
            <Typography variant='h6'>Twoje ciasta</Typography>
 
            <Grid container >
                {cakesToRender()}

            </Grid>
        </Paper>
    
        )
}

export default withStyles(styles)(UserCakeData);
