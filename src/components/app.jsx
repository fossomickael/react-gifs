import React, { Component } from 'react'; 
import Gif from './gif';
import GifList from './gif_list';
import SearchBar from './search_bar';

const GIPHY_API_KEY = 'y8xNhy9aPVQY2JnZfG2MVucRJ336jjPg'; 

class App extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          gifs: [],
          selectedGifId: "3ohc10GA6j4XrLWzZK"
        };
        this.search = this.search.bind(this);
        this.selectGif = this.selectGif.bind(this);
      }

      selectGif(id) {
        this.setState({
          selectedGifId: id
        });
      }
    
   
    search(query) {
        const giphEndpoint = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${query}&limit=10`
        fetch(giphEndpoint).then(response => response.json()).then((data) => {
          const gifs = data.data.map(giph => giph.id)
          this.setState({
            gifs: gifs
          })
        })
      }

    render() {
        return (
            <div>
            <div className="left-scene">
                <SearchBar searchFunction={this.search} />
              <div className="selected-gif">
                <Gif id={this.state.selectedGifId} />
              </div>
            </div>
            <div className="right-scene">
              <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
            </div>
          </div>

            );
        }

}

export default App;