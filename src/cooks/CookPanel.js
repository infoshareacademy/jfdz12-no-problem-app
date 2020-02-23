import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CooksCakes from './CooksCakes';
import Avatar from '@material-ui/core/Avatar';
import { Grid } from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';

export default function CookPanel(props) {
    return (
    <ExpansionPanel>
        <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        id={props.cook.id}
        >
            <Grid container spacing={3} alignItems='center' justify='center'>
                <Grid item md={2} sm={2} xs={2}>
                    <Avatar alt={props.cook.name} src={props.cook.avatar}  />
                </Grid>
                <Grid item md={5} sm={5} xs={5}>
                    <Typography style={{fontWeight: 'bold', fontSize: '1.3rem'}}>{props.cook.name} {props.cook.surname}</Typography>
                </Grid>
                <Grid item md={5} sm={5} xs={5}>
                    <Typography>{props.cook.location.city} {props.cook.location.district}</Typography>
                </Grid>
            </Grid>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <Grid container>
                <Grid item xs={12}>
                    <h3>O mnie</h3>
                    {props.cook.description
                    ? <p>{props.cook.description}</p>
                    : <p>Więcej o mnie już wkrótce!</p>}
                </Grid>
              
                <Grid item xs={12}>
                    <h3>Moje ciasta</h3>
                </Grid>
                <Grid container spacing={3} justify='center'>
                    {props.cooksCakes.length>0
                    ? props.cooksCakes.map(cake=>
                        <Grid item md={4} sm={6} xs={6} key={cake.id}>                      
                            <CooksCakes cake={cake} />
                        </Grid>)
                    : <p>Już wkrótce pojawią się ciasta w ofercie!</p>}
                </Grid>
                <Grid item xs={12}>
                    <h3>Kontakt</h3>
                    <Grid container direction='column' alignItems='center'>
                      
                            <Grid item xs={6}>
                                <Grid container justify='center'>
                                    <CallIcon/>
                                    <Typography>{props.cook.contact.mobile}</Typography>
                                </Grid>
                                </Grid>
                                <Grid item xs={6}>
                                <Grid container justify='center'>
                                    <MailOutlineIcon/>
                                    <a href={`mailto:${props.cook.contact.mail}`} rel="noopener noreferrer" target="_blank" style={{textDecoration: 'none', color: 'inherit'}}>{props.cook.contact.mail}</a>
                            </Grid>
                        </Grid>
                    
                </Grid>
            
              
                </Grid>
            </Grid>
        </ExpansionPanelDetails>
    </ExpansionPanel>
    )
}
