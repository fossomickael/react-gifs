import React, { Component } from 'react'; 
import Gif from './gif';

class App extends Component {
   

    render() {
        return (
            <div>
                <div className="left-scene">
                <div className="selected-gif">
                    <Gif />
                </div>
                </div>
                <div className="right-scene"></div>
            </div>

            );
        }

}

export default App;