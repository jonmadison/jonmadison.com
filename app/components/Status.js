import React from 'react';

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

let Status = React.createClass({
    getInitialState: function() {
        return fetchStatuses();
    },
    render: function() {
        return (
            <div className="status-container">
                <div>
                {this.state.data[0].text}
                </div>
            </div>
        );
    }
});

export default Status;