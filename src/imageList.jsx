import React, { Component } from 'react';
import ImageItem from './ImageItem.jsx';

class ImageList extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <h1>Cute Adorable Cuddly Characters</h1>
                {this.props.images.map((item) => {
                    return <ImageItem key={item.title} images={item}/>
                })} 
            </>
         );
    }
}
 
export default ImageList;