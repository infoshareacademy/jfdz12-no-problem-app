import React, { Component } from 'react';
import PageWrapper from '../components/PageWrapper';
import { getCooks, getCakes } from '../api/Api2';
import { Container, Grid } from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default class CooksList extends Component {

    state = {
        cooks: [],
        cakes: []
    }

    componentDidMount() {
        getCooks()
        .then(data=>
        this.setState({
            cooks: data
        })
        );
        getCakes()
        .then(data=>
            this.setState({
                cakes: data
            }))
    }

    cookCakes = [];

    render() {
      
        return (
            <PageWrapper>
                <Container>
                    <Grid>
                        <h1>Pieczemy za Ciebie!</h1>
                        
                        {this.state.cooks.map(cook=>{
                            let cooksCakes = this.state.cakes.filter(cake=> cake.cookID===cook.id);
                            console.log(cooksCakes);
                            return (
                         <ExpansionPanel>
                         <ExpansionPanelSummary
                           expandIcon={<ExpandMoreIcon />}
                           aria-controls="panel1a-content"
                           id="panel1a-header"
                         >
                           <Typography>{cook.name} {cook.surname}</Typography>
                         </ExpansionPanelSummary>
                         <ExpansionPanelDetails>
                           <Typography>
                             {cook.description}
                             {/* {cooksCakes} */}
                           
                           </Typography>
                         </ExpansionPanelDetails>
                        </ExpansionPanel>)})}
                        
                    </Grid>
                </Container>
            </PageWrapper>
        )
    }
}
