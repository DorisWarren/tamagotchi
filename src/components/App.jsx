import React from 'react';
import Tamagotchi from './Tamagotchi'
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
  super(props);
}


  render(){
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Tamagotchi}/>
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }

}

export default App;
