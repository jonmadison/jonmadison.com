import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Axios from "axios";
let qs = require("qs");

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
            if(response.error) {
                console.log(`error: ${response.error}`);
            } else {
                this.setState(response);
            }
        })
        .catch(function (response) {
            console.log(response);
        });
    },
    render: function() {
        return (
            <div className="photos">
                <ul className="photo-list">
                {this.state.data.slice(0,this.props.photoCount).map(o => {
                    return (
                        <li key={o.id}><img src={o.imageName} height="320"/></li>
                    )
                })}
                </ul>
            </div>
        );
    }
});

export default Gallery;