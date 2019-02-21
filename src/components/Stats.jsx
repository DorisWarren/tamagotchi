import React from 'react';
import Sleep from './Sleep';
import Play from './Play';
import Feed from './Feed';

class Stats extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      Hunger: 10,
      Happiness: 0,
      Sleepiness: 0
    };
  }

componentDidMount() {
  this.updateHungerTimer = setInterval(()=>
  this.updateHunger(),
  5000
  );
}

updateHunger(){
  let newHunger = this.state.Hunger -=1;
  this.setState({hunger: newHunger});
}



  render(){

    return(
    <div>
      <h2>TAMAGOTCHI</h2>
      <div>
        <h3>Hunger: {this.state.Hunger}</h3>
        <h3>Happiness: {this.state.Happiness} </h3>
        <h3>Sleepiness: {this.state.Sleepiness} </h3>
      </div>
      <div>
        <Feed food={this.state.hunger}/>
        <Play/>
        <Sleep/>
      </div>
    </div>
  )
  };

}
export default Stats;
