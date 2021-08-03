import React, { Component } from 'react';
import images from './data.js';
import ImageList from './imageList.jsx';
import './creature.css';

class App extends Component {
  state = { 
      keyword: 'All',
   };

  imageHandle = (event) => {
    this.setState({ keyword: event.target.value });
  };

  render() { 
    
    const filteredCreatures = images.filter(
      (creature) => this.state.keyword === 'All' || creature.keyword === this.state.keyword
    );

    return ( 
      
      <div className='App'>
        <h1>Select a creature:</h1>
          <select onChange={this.imageHandle}>
              <option value="narwhal">Uniwhal</option>
              <option value="rhino">Rhino Family</option>
              <option value="unicorn">Unicorn Head</option>
              <option value="unilego">UniLego</option>
              <option value="narwhal">Basically a unicorn</option>
              <option value="narwhal">#truth</option>
              <option value="rhino">Baby Rhino</option>
              <option value="triceratops">Cera</option>
              <option value="narwhal">Narwhal costume</option>
              <option value="rhino">Rhino costume</option>
              <option value="unicorn">Believe</option>
              <option value="markhor">Markhor</option>
              <option value="markhor">Baby markhor</option>
              <option value="mouflon">Mouflon</option>
              <option value="addax">Addax</option>
              <option value="mouflon">Baby mouflon</option>
              <option value="chameleon">Happy Jackson's Chameleon</option>
              <option value="chameleon">Serious Jackson's Chameleon</option>
              <option value="lizard">Horned Lizard</option>
              <option value="dragon">Smaug</option>
          </select>
        <section className='Image-box'>
          <ImageList images={filteredCreatures} />
        </section>
        
      </div>
     );
  }
}
 
export default App;
