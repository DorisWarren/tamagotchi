import React from 'react';
import Stats from './stats';

function Home(){
  return(
    <div>
      <h1>THIS IS MY TAMAGOTCHI</h1>
        <div>
          <div>
            <h3>Hunger: </h3>
            <h3>Age: </h3>
            <h3>Tiredness: </h3>
            <h3>Happiness: </h3>
          </div>
          <button>Feed</button>
          <button>Play</button>
          <button>Sleep</button>
        </div>
      <Stats/>
    </div>
  )
}

export default Home;
