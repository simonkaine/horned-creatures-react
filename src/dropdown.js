import React, { Component } from 'react';
import './creature.css';

class Dropdown extends Component {
    state = {  }
    render() { 
        const {options, changeHandle, label} = this.props;
        return ( 
            <div className='Dropdown'>
                <label>{label}</label>
                <select onChange={changeHandle}>
                    {options.map((option) => (<option value={option}>{option}</option>))}
                </select>
            </div>

         );
    }
}
 
export default Dropdown;