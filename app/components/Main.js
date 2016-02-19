import React from "react";
import Gallery from "./Gallery";
import Home from "./Home";
import Status from "./Status";

//todo: promisify
let Main = React.createClass({
    render: function() {
        return (
            <div className="container-fluid">
              <div className="row">
                <div className="photos">
                    <Gallery photoCount="100" tagName="webfeatured" />
                </div>
            </div>
            <div className="row">
                {this.props.children}
            </div>
          </div>
        );
    }
});

export default Main;
