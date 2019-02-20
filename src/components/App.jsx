import React from 'react';
import Header from './Header';
import Home from './Home'
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
  super(props);
}


  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }

}

export default App;
