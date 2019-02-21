import React from 'react';
import PropTypes from 'prop-types';

class Play extends React.Component{
  render(){

    return(
      <div>
        <button onClick={this.props.playWithTamagotchi}>Play</button>
      </div>
    );
  }
}

Play.propTypes={
  playWithTamagotchi: PropTypes.func
};

export default Play;
