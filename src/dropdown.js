import React, { Component } from 'react';

class Dropdown extends Component {
    state = {  }
    render() { 
        console.log(this.props)
        const {options, changeHandle} = this.props;
        return ( 
            <select onChange={changeHandle}>
              {options.map((option) => (<option value={option}>{option}</option>))}
            </select>
         );
    }
}
 
export default Dropdown;