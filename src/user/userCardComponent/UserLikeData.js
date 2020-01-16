import React from 'react';
import { Grid, Paper, Typography, Divider, IconButton, withStyles } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

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
    icon:{
        color: 'red',
    }
    
}

function UserLikeData(props){

    const {likes, classes} = props;

    const likesToRender = () => {
        if(likes.length>0){
            return likes.map ((like,idx) => {
                const backColor = idx % 2 === 0 ? '#fce4ec50' : '';
                return (<div key={like.cake.id}>
                    <Grid item xs={12}>
                       <Divider/>
                    </Grid>
                    
                    <Grid  xs ={12} container item className={classes.grid} style ={{backgroundColor: backColor}}>
                        
                        <Grid item xs={3} sm={3} md={2} >
                            <img src = {like.cake.imgURL} 
                                alt="cake foto" 
                                className={classes.img}>    
                            </img>
                           
                        </Grid>
                            
                        <Grid item xs
                            container 
                            direction='column' 
                            //justify='space-evenly' 
                            alignItems='flex-start'
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
                                            {like.cake.name}
                                        </Typography>
                                    </div>
                                    <div className={classes.text}>
                                        cukiernik: <Typography className={classes.text} component='span' variant='h6'> {like.cake.cookName}</Typography>
                                    </div>
                                    <div className={classes.text}>
                                        polubienia: <Typography className={classes.text} component='span' variant='h6'>{like.cake.likes}</Typography>
                                    </div>
                                </Grid >
                            </Grid>
                             
                        </Grid>  
                        <Grid item >
                            
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon  className={classes.icon}/>
                                </IconButton>
                            
                        </Grid>
                    </Grid>
                    
                   </div> )})
        }else{ return "" }
    }

    return (
        <Paper >
            <Typography variant='h6'>Twoje polubione ciasta</Typography>
 
            <Grid container >
                {likesToRender()}

            </Grid>
        </Paper>
    
        )
}

export default withStyles(styles)(UserLikeData);


// return (<>
//     <Grid item xs={12}>
//        <Divider/>
//     </Grid>
    
//     <Grid key={like.id} xs ={12} container item style={{margin: '5px',}}>
        
//         <Grid item xs={12} sm={4} container>
//             <Grid item xs={6}>
//                 <img src = {like.cake.imgURL} alt="cake foto" style={{width:'100%', maxHeight:'100px'}}></img>
//             </Grid>
            
//             <Grid item  xs={6}
//                 container 
//                 direction='column' 
//                 justify='space-evenly' 
//                 alignItems='center'
//             >
//                 <Divider orientation="vertical"/>
//                 <Box>
//                     {like.date}
//                 </Box> 
//                 <Avatar 
//                     variant="rounded" 
//                     className = {classes.avatar} 
//                     style={{backgroundColor: like.cake.typeColor}}
//                 >
//                     <div >{like.cake.typeName}</div> 
//                 </Avatar>
//             </Grid>
//         </Grid>
        
//         <Grid item container xs={12} sm={8} >
//             <Grid item xs={5} 
//                 container 
//                 justify='space-between' 
//                 alignContent='flex-start'
//                 direction='column'
//             >
//                 <Divider orientation='vertical'/>
//                 <Box px="5px" align='left'>
//                     <div style ={{padding: '3px'}}>ciasto: {like.cake.name}</div>
//                     <div style ={{padding: '3px'}}>cukiernik: {like.cake.cookName}</div>
//                 </Box >
//             </Grid>
            
//             <Grid item xs={7}
//                 container 
//                 justify = 'flex-start'  
//                 alignItems='flex-start'
//             >
//                 <Divider orientation='vertical' /> 
//                 <Box align='left' style={{paddingLeft: '5px'}}>opis:</Box>
//                 <Box align='left' style={{paddingLeft: '5px'}}>{like.content}</Box>
//             </Grid> 
//         </Grid>  
//     </Grid>
    
//    </> )})