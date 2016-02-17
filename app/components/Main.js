import React from "react";
import Gallery from "./Gallery";
import Home from "./Home";
import Status from "./Status";

//todo: promisify
let fetchStatuses = function() {
    return { data: [
        {
            text: "You QCon folks are amazing. Thanks for having me. Mad hearts ❤",
            date: "2016-01-31 20:22"
        },
        {
            text: "i'll be speaking at QCon SF in a few weeks. ack",
            date: "2016-01-30 15:54"
        },
        {
            text: "our team won an Intel Internet of Things hackathon yesterday in Seattle. #wearensemble",
            date: "2016-01-30 15:54"
        }
    ]};
};

let Main = React.createClass({
    getInitialState: function() {
        return fetchStatuses();
    },
    render: function() {
        return (
          <div className="container-fluid">
            <div className="row">
              <div className="photos">
                <Gallery photoCount="500" tagName="featured" />
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
