import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CooksCakes from './CooksCakes';
import Avatar from '@material-ui/core/Avatar';
import { Grid } from '@material-ui/core';

export default function CookPanel(props) {
    return (
    <ExpansionPanel>
        <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        id={props.cook.id}
        >
            <Grid container spacing={3} alignItems='center'>
                <Grid item xs={2}>
                    <Avatar alt={props.cook.name} src={props.cook.avatar}  />
                </Grid>
                <Grid item xs={5}>
                    <Typography style={{fontWeight: 'bold', fontSize: '1.3rem'}}>{props.cook.name} {props.cook.surname}</Typography>
                </Grid>
                <Grid item xs={5}>
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
                        <Grid item xs={4} key={cake.id}>                      
                            <CooksCakes cake={cake} />
                        </Grid>)
                    : <p>Już wkrótce pojawią się ciasta w ofercie!</p>}
                </Grid>
            </Grid>
        </ExpansionPanelDetails>
    </ExpansionPanel>
    )
}
