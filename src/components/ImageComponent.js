import React from 'react';

/**
 * Individual image component.
 * @param {React props object} props 
 */
const ImageComponent = (props) => {
    return (
            <img src={props.thumbnail}/>
    )
}

export default ImageComponent;