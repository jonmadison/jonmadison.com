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
            tags: ["webfeatured"],
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
        .catch(function () {
            this.setState(fetchPlaceholders()["data"]);
        });
    },
    render: function() {
        return (
            <ReactCSSTransitionGroup
            transitionName="photo-gallery-load"
            transitionAppear={true}
            transitionAppearTimeout={2000}
            transitionEnterTimeout={2000}
            transitionLeaveTimeout={2000}>
               <div className="photo-gallery">
                    <ul className="photo-gallery-list">
                             {this.state.data.slice(0,this.props.photoCount).map(o => {
                                return (
                                        <li key={o.id}><img src={o.imageName} height="320"/></li>
                                );
                            })}
                     </ul>
                </div>
            </ReactCSSTransitionGroup>
        );
    }
});

export default Gallery;