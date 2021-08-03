import React, { Component } from 'react';
import images from './data.js';
import ImageList from './imageList.jsx';

class App extends Component {
  state = { 
   
   }
  render() { 
    return ( 
      <div className='App'>
          <ImageList images={images} />
      </div>
     );
  }
}
 
export default App;
