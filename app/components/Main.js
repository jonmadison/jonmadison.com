import React from "react";
import Gallery from "./Gallery";
import Home from "./Home";

let Main = React.createClass({
    render: function() {
        return (
          <div className="container-fluid">
            <div className="photos">
              <Gallery/>
            </div>
            <div className="container">
              {this.props.children}
            </div>
          </div>
        );
    }
});

module.exports = Main;
