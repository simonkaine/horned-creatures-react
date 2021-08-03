import React, { Component } from 'react';
import ImageItem from './ImageItem.jsx';

class ImageList extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <h1>Image list page rendering</h1>
            <ImageItem />
            </>
         );
    }
}
 
export default ImageList;