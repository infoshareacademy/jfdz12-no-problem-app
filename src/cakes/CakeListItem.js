import React from 'react';
import { Image, Card, Icon } from 'semantic-ui-react';
import Cakes from './Cakes';


class CakeListItem extends React{
  state = {
    cakes: this.props.cakesArray
  }

  setCakeToCkaes = () =>{
    this.setState(
      {cakes: this.state.cakes} 
    )
  } 

  render(){ 
    const cakes2 = this.setCakeToCkaes;
    return (
      <Card.Group doubling itemsPerRow={3} stackable>

        {cakes2.map((cakes)=>{
            return <Cakes cake = {cakes}  />
        })}

      </Card.Group>
    )
  }
}
export default CakeListItem;