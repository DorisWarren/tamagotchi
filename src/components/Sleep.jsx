import React from 'react';
import PropTypes from 'prop-types';

class Sleep extends React.Component{
  render(){

    return(
      <div>
        <button onClick={this.props.makeTamagotchiSleep}>Sleep</button>
      </div>
    );
  }
}

Sleep.propTypes={
  makeTamagotchiSleep: PropTypes.func
};
export default Sleep;
