import React, { Component } from 'react';

class ImageItem extends Component {
    state = {  }
    render() { 
        return ( 
            <p>
                {this.props.images.title}
                <img
                    alt={this.props.images.title}
                    width="100"
                    src={this.props.images.url}
                />
            </p>
         );
    }
}
 
export default ImageItem;