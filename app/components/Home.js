import React from 'react';

let Home = React.createClass({
    getInitialState: function() {
        return { data: [
            {
                text: "today was a good day",
                date: "2016-01-31 20:22"
            },
            {
                text: "i'm gonna be the best i can be",
                date: "2016-01-30 15:54"
            }
        ]};
    },
    render: function() {
        return (
        <div className="home-container">
          <div className="row text-center">
            <h3>
              {this.state.data[0].text}
            </h3>
          </div>
          <div className="row" id="sharing">
          </div>
          <div className="row">
            <div className="col-sm-6 feature-box" id="learning">
            learning...
            </div>
            <div className="col-sm-6 feature-box" id="doing">
            doing...
            </div>
          </div>
          <div className="row">
              jon madison is a  dev, continuous learner,
              and sharer currently working in Seattle, Washington.
          </div>
        </div>
        );
    }
});

module.exports = Home;