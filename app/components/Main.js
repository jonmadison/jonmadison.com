import React from 'react';

let Main = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="span10 offset2">
           <h1>
            Software engineer, continuous learner,
            and sharer currently working in Seattle, Washington.
            </h1>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Main;
