import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Axios from "axios";
import UniqueId from 'lodash.uniqueid';

let qs = require("qs");

require("style!css!../../public/css/Gallery.css");

let fetchPlaceholders = function() {
    return {
        data: [
            {
                "id": 0,
                "imageName": "/images/0.jpg",
                "altText": "zero"
            },
            {
                "id": 1,
                "imageName": "/images/1.jpg",
                "altText": "one"
            },
            {
                "id": 2,
                "imageName": "/images/2.jpg",
                "altText": "two"
            },
            {
                "id": 3,
                "imageName": "/images/3.jpg",
                "altText": "three"
            },
            {
                "id": 4,
                "imageName": "/images/4.jpg",
                "altText": "four"
            },
            {
                "id": 5,
                "imageName": "/images/5.jpg",
                "altText": "five"
            },
            {
                "id": 6,
                "imageName": "/images/6.jpg",
                "altText": "six"
            }
        ]};
};

let Gallery = React.createClass({
    getInitialState: function() {
        return {data: []};
    },
    componentDidMount: function() {
        let query = {
            tags: [this.props.tagName],
            results: this.props.photoCount
        };

        let url = `/api/flickr/photos/smartbrother/?${qs.stringify(query)}`;

        Axios.get(url)
        .then( (response) => {
            if(response.status !== 200) {
                this.setState(fetchPlaceholders()["data"]);
            } else {
                this.setState(response);
            }
        })
        .catch( () => {
            this.setState(fetchPlaceholders()["data"]);
        });
    },
    render: function() {
        return (
                <div className="photo-gallery">
                    <ul className="photo-gallery-list">
                        <ReactCSSTransitionGroup
                        transitionName="photo-gallery-load"
                        transitionAppear={true}
                        transitionAppearTimeout={1500}
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}>
                        {this.state.data.slice(0,this.props.photoCount).map(o => {
                            return (
                                    <li key={o.id}><img src={o.imageName} height="320"/></li>
                            );
                        })}
                        </ReactCSSTransitionGroup>
                 </ul>
                </div>
        );
    }
});

export default Gallery;