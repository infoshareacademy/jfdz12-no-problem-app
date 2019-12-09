import React from 'react';
import { withStyles } from '@material-ui/core'

const styles= {
    root:{
        float:'right',
        padding: '2px 8px',
        borderRadius: '4px',
        color: 'white',
        fontWeight: 'bold',
    },
}

class TypeLabel extends React.Component{
        state = {
            type: {}
        };
    
    componentDidMount() {
        fetch ('./types.json')
            .then(res => res.json())
            .then(res => {
                this.setState({ type: res.find(el => el.id === this.props.typeId) })
            })
    }        

    render(){
        const {name, color} = this.state.type || {};
        const {classes} = this.props;

    return <>
            <div className={classes.root} style={{backgroundColor: color}}>
                {name}
            </div> 
        
    </>
    }
}

//style = {{float:'right', backgroundColor:{color}, color: {color} }} 
export default withStyles(styles)(TypeLabel);
