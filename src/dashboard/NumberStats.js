import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FaceIcon from '@material-ui/icons/Face';
import CakeIcon from '@material-ui/icons/Cake';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import RoomIcon from '@material-ui/icons/Room';

const useStyles = makeStyles({
    backgroundDiv: {
        backgroundColor: 'rgb(185, 19, 124, 0.6)',
        color: 'white',
        fontSize: '2vw',
        paddingTop: '1vw',
        paddingBottom: '2vw'
    },
    icon: {
        color: 'white',
        fontSize: '5vw',
    },
    lineFlex: {
        display:'flex',
        justifyContent: 'space-evenly',
        paddingBottom: '2.5vw'
    }
   
  });

export default function NumberStats() {
    const classes = useStyles();
    return (
        <div className={classes.backgroundDiv}>
           
            <h4 style={{paddingBottom: '0.5vw'}}>Nasza aplikacja to:</h4>
            <div className={classes.lineFlex}>
                <div>
                    <div>
                        <FaceIcon className={classes.icon}/>
                    </div>
                    <div>
                        1230 użytkowników
                    </div>
                </div>

                <div>
                    <div>
                        <EmojiPeopleIcon className={classes.icon}/>
                    </div>
                    <div>
                        156 cukierników
                    </div>
                </div>
                <div>
                <div>
                    <CakeIcon className={classes.icon}/>
                </div>
                <div>
                    695 ciast w ofercie
                </div>
            </div>

            <div>
                <div>
                    <RoomIcon className={classes.icon}/>
                </div>
                <div>
                7 różnych miast
                </div>
            </div>
            </div>
            
         
        </div>
    )
}
