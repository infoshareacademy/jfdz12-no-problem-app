import React from 'react';
import { Grid, Paper, Typography, Divider, Box, IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';


export default function UserLikeData(props){

    const {likes} = props;

    const likesToRender = () => {
        if(likes.length>0){
            return likes.map ((like) => { 
                return (<div key={like.cake.id}>
                    <Grid item xs={12}>
                       <Divider/>
                    </Grid>
                    
                    <Grid  xs ={12} container item style={{margin: '5px',}}>
                        
                        <Grid item xs={3} sm={3} md={2} >
                            <img src = {like.cake.imgURL} 
                                alt="cake foto" 
                                style={{ width:'100%', height:'100px'}}></img>
                           
                        </Grid>
                            
                        <Grid item xs
                            container 
                            direction='column' 
                            justify='space-evenly' 
                            alignItems='flex-start'
                        > 
                            
                            <Grid item 
                                container 
                                justify='space-between' 
                                alignContent='flex-start'
                                direction='column'
                            >
                                <Box px="10px" align='left'>
                                    <div >
                                        ciasto: {like.cake.name}
                                    </div>
                                    <div >
                                        cukiernik: {like.cake.cookName}
                                    </div>
                                    <div>
                                        liczba lików: {like.cake.likes}
                                    </div>
                                </Box >
                            </Grid>
                             
                        </Grid>  
                        <Grid item>
                            <Box px='10px'>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                            </Box>
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