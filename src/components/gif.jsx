import React, { Component } from 'react'; 


class Gif extends Component {
   
    render() {
        const src = `https://media.giphy.com/media/U5DdV7TT5SnIpiuhuN/giphy.gif`;
        return (
          <img src={src} className="gif"  />
        );
      }


}

export default Gif;