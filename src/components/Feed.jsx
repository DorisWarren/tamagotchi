import React from 'react';
import PropTypes from 'prop-types';


function Feed(props){


// let needFood = setInterval(fullness, 50000);


// function handleHunger(event){
//   event.preventDefualt();
//   props.
//
// }

  return(
    <div>
      <button>Feed</button>
    </div>
  )
}

Feed.propTypes = {
  onFeedTamagotchi: PropTypes.func
}

export default Feed;
