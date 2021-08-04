import React, { Component } from 'react';
import images from './data.js';
import ImageList from './imageList.jsx';
import Dropdown from './dropdown.js';
import './creature.css';

class App extends Component {
  state = { 
      keyword: 'All',
      horns: 'All'
   };

  keywordOptions = ['All', 'narwhal', 'rhino', 'unicorn', 'unilego', 'triceratops', 'markhor', 'mouflon', 'addax', 'chameleon', 'lizard', 'dragon'];

  imageHandle = (event) => {
    this.setState({ keyword: event.target.value });
  };

  hornHandle = (event) => {
    this.setState({ horns: event.target.value })
  }

  render() { 
    
    const filteredCreatures = images.filter(
      (creature) => (this.state.keyword === 'All' || creature.keyword === this.state.keyword) && (this.state.horns === 'All' || creature.horns === +(this.state.horns))
    );

    return ( 
      
      <div className='App'>
        <h1>Select a creature:</h1>
          <Dropdown 
            options={this.keywordOptions}
            changeHandle={this.imageHandle}/>
          {/* <select onChange={this.imageHandle}>
              <option value="All">All</option>
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
          </select> */}
          <h3>Select amount of horns!</h3>
          <select onChange={this.hornHandle}>
              <option value="All">All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="100">100</option>
          </select>
        <section className='Image-box'>
          <ImageList images={filteredCreatures} />
        </section>
        
      </div>
     );
  }
}
 
export default App;
