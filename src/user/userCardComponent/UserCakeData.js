import React from 'react';
import { Grid, Paper, Typography, Divider, withStyles } from '@material-ui/core';

const styles = {
    img : {
        width:'100%', 
        height:'100px',
    },
    grid:{
        padding: '5px',
    },
    text:{
        paddingLeft:'10px',
    },
    wrapper:{
        width:'100%',
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
                        
                        <Grid item sm={3} md={2} >
                            <img src = {cake.imgURL} 
                                alt="cake foto" 
                                className={classes.img}>    
                            </img>
                           
                        </Grid>
                            
                        <Grid item xs
                            container 
                            direction='column' 
                            alignItems='flex-start'
                            wrap='wrap'
                        > 
                            
                            <Grid item 
                                container 
                                justify='space-between' 
                                alignContent='flex-start'
                                direction='column'
                            >
                                <Grid item container alignItems='flex-start' direction='column'>
                                    <div className={classes.text}>
                                        ciasto: 
                                        <Typography className={classes.text} component='span' variant='h6'> 
                                            {cake.name}
                                        </Typography>
                                    </div>
                                    <div className={classes.text}>
                                        cukiernik: <Typography className={classes.text} component='span' variant='h6'> {}</Typography>
                                    </div>
                                    <div className={classes.text}>
                                        polubienia: <Typography className={classes.text} component='span' variant='h6'>{cake.likes}</Typography>
                                    </div>
                                </Grid >
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
