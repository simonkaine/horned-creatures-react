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
  hornOptions = ['All', 1, 2, 3, 100];
  imageHandle = (event) => {
    this.setState({ keyword: event.target.value });
  };

  hornHandle = (event) => {
    this.setState({ horns: event.target.value })
  }

  render() { 
    
    const filteredCreatures = images.filter(
      (creature) => (this.state.keyword === 'All' || creature.keyword === this.state.keyword) 
      && (this.state.horns === 'All' || creature.horns === +(this.state.horns))
    );

    return ( 
      
      <div className='App'>
        <h1>Horned Creatures Gallery</h1>

          <Dropdown 
            label='Type:'
            options={this.keywordOptions}
            changeHandle={this.imageHandle} 
          />

          <Dropdown 
            label='Select the amount of horns:'
            options={this.hornOptions}
            changeHandle={this.hornHandle}
          />
          
        <section className='Image-box'>
          <ImageList images={filteredCreatures} />
        </section>
        
      </div>
     );
  }
}
 
export default App;
