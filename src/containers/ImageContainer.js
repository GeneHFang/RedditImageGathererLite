import React from 'react';
import ImageComponent from '../components/ImageComponent';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return({
        subreddit: state.firstReducer.subreddit,
        images: state.firstReducer.images,
    })
}

const ImageContainer = (props) => {


    const renderImages = () => {
        return props.images.map(img => {
            return (
                <ImageComponent key={img.name} />
                );
        });
    };

    return(
        <div className="image-container">
            Container:
            {renderImages()}
        </div>
    );
};

export default connect(mapStateToProps)(ImageContainer);