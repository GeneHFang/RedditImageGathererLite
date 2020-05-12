import React from 'react';
import ImageComponent from '../components/ImageComponent';

/**
 * Container for all image components
 * @param {React props Object} props 
 */
const ImageContainer = (props) => {

    //returns all thumbnails (and image object information on click)
    const renderImages = () => {
        return props.images.map(img => {
            return (
                <ImageComponent key={img.data.name} thumbnail={img.data.thumbnail}/>
            );
        });
    };

    
    return(
        <div className="image-container">
            Container:<br/>
            {renderImages()}
        </div>
    );
};

export default ImageContainer;