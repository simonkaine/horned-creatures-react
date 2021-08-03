import React, { Component } from 'react';
import ImageItem from './ImageItem.jsx';

class ImageList extends Component {
    state = {  }
    render() { 
        console.log(this.props.images)
        return ( 
            <>
            <h1>Image list page rendering</h1>
                {this.props.images.map((item) => {
                    return <ImageItem key={item.title} images={item}/>
                })} 
            </>
         );
    }
}
 
export default ImageList;