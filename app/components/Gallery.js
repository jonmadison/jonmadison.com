import React from 'react';

//todo: promisify
let fetchPhotos = function() {
    return {
        data: [
            {
                "id": 0,
                "imageName": "0.jpg",
                "altText": "zero"
            },
            {
                "id": 1,
                "imageName": "1.jpg",
                "altText": "one"
            },
            {
                "id": 2,
                "imageName": "2.jpg",
                "altText": "two"
            },
            {
                "id": 3,
                "imageName": "3.jpg",
                "altText": "three"
            },
            {
                "id": 4,
                "imageName": "4.jpg",
                "altText": "four"
            },
            {
                "id": 5,
                "imageName": "5.jpg",
                "altText": "five"
            },
            {
                "id": 6,
                "imageName": "6.jpg",
                "altText": "six"
            }
        ]};
};

let Gallery = React.createClass({
    getInitialState: function() {
        return fetchPhotos();
    },
    render: function() {
        return (
            <div className="photos">
            <ul className="photo-list">
            {this.state.data.map(o => {
                return <li key={o.id}><img src={`images/${o.imageName}`} width="480"/></li>;
            })}
            </ul>
            </div>
        );
    }
});

export default Gallery;