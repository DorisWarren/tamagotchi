import React from 'react';
import Sleep from './Sleep';
import Play from './Play';
import Feed from './Feed';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';

const bounceAnimation = keyframes`${bounce}`;

const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;

class Stats extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      Hunger: 10,
      Happiness: 0,
      Sleepiness: 0
    };
    this.feedTamagotchi = this.feedTamagotchi.bind(this);
    this.playWithTamagotchi = this.playWithTamagotchi.bind(this);
    this.makeTamagotchiSleep = this.makeTamagotchiSleep.bind(this);
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

  feedTamagotchi(){
    let newHunger =this.state.Hunger += 1;
    this.setState({hunger: newHunger});
  }

  playWithTamagotchi(){
    let newHappiness = this.state.Happiness += 1;
    let newSleepiness = this.state.Sleepiness += 2;
    this.setState({happiness: newHappiness, sleepiness: newSleepiness});
  }

  makeTamagotchiSleep(){
    let newSleepiness = this.state.Sleepiness = 0;
    this.setState({sleepiness: newSleepiness});
  }

  render(){

    return(
      <BouncyDiv>
      <div>
        <h2>TAMAGOTCHI</h2>
        <div>
          <h3>Hunger: {this.state.Hunger}</h3>
          <h3>Happiness: {this.state.Happiness} </h3>
          <h3>Sleepiness: {this.state.Sleepiness} </h3>
        </div>
        <div>
          <Feed feedTamagotchi={this.feedTamagotchi}/>
          <Play playWithTamagotchi={this.playWithTamagotchi}/>
          <Sleep makeTamagotchiSleep={this.makeTamagotchiSleep}/>
        </div>
      </div>
    </BouncyDiv>
    );
  }

}
export default Stats;
