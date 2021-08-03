import React, { Component } from 'react';
import ImageItem from './ImageItem.jsx';

class ImageList extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                {this.props.images.map((item) => {
                    return <ImageItem key={item.title} images={item}/>
                })} 
            </>
         );
    }
}
 
export default ImageList;