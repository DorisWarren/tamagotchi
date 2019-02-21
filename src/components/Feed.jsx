import React from 'react';
import PropTypes from 'prop-types';

class Feed extends React.Component{
  render(){

    return(
      <div>
        <button onClick={this.props.feedTamagotchi}>Feed</button>
      </div>
    );
  }
}

Feed.propTypes ={
  feedTamagotchi: PropTypes.func
};
export default Feed;
