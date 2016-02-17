import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Axios from "axios";
let qs = require("qs");

let fetchPlaceholders = function() {
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
        return fetchPlaceholders();
    },
    componentDidMount: function() {
        let query = {
            tags: ["webfeatured"],
            results: this.props.photoCount
        };

        let url = `/api/flickr/photos/smartbrother/?${qs.stringify(query)}`;

        Axios.get(url)
        .then( (response) => {
            if(response.error) {
                this.setState(fetchPlaceholders()["data"]);
            } else {
                this.setState(response);
            }
        })
        .catch(function (response) {
            this.setState(fetchPlaceholders()["data"]);
        });
    },
    render: function() {
        return (
            <div className="photos">
                <ul className="photo-list">
                {this.state.data.slice(0,this.props.photoCount).map(o => {
                    return (
                        <li key={o.id}><img src={o.imageName} height="320"/></li>
                    );
                })}
                </ul>
            </div>
        );
    }
});

export default Gallery;