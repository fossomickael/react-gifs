import React, { Component } from 'react'; 


class Gif extends Component {
   
    render() {
        const src = `https://media.giphy.com/media/3ohc10GA6j4XrLWzZK/giphy.gif`;
        return (
          <img src={src} className="gif"  />
        );
      }


}

export default Gif;