import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Axios from "axios";
import UniqueId from 'lodash.uniqueid';
import Moment from 'moment';

require("style!css!../../public/css/Status.css");

let fetchPlaceholders = function() {
    return {
        data: [
            {
                message: "You QCon folks are amazing. Thanks for having me. Mad hearts ❤",
                created_at: "2016-03-09T05:02:41.420Z"
            },
            {
                message: "i'll be speaking at QCon SF in a few weeks. ack",
                created_at: "2016-03-09T05:02:41.420Z"
            },
            {
                message: "our team won an Intel Internet of Things hackathon yesterday in Seattle. #wearensemble",
                created_at: "2016-03-09T05:02:41.420Z"
            }
        ]
    };
};

let Status = React.createClass({
    getInitialState: function() {
        return {
            data: [ {
                message: "loading...",
                created_at:""
            }]
        };
    },
    componentDidMount: function() {
        let url = `/api/statuses`;

        Axios.get(url)
            .then( (response) => {
                if(response.status !== 200) {
                    this.setState(fetchPlaceholders());
                } else {
                    this.setState(response);
                }
            })
            .catch( () => {
                this.setState(fetchPlaceholders());
            });
    },
    render: function() {
        let message = this.state.data[Number.parseInt(this.props.index)].message;
        let createdAt = new Date(this.state.data[Number.parseInt(this.props.index)].created_at);
        let createAtHuman = Moment(createdAt).fromNow();
        return (
            <div id="status-component">
                <div className="row status-component">
                    <div className="col-sm-1">
                        <a href="">
                        </a>
                    </div>
                    <div className="col-sm-10">
                        <ReactCSSTransitionGroup
                        transitionName="status-load"
                        transitionAppear={true}
                        transitionAppearTimeout={2500}
                        transitionEnterTimeout={2500}
                        transitionLeaveTimeout={2500}>
                            <div className="status">
                                {message}
                                <p className="status-date">
                                posted {createAtHuman}
                                </p>
                            </div>
                        </ReactCSSTransitionGroup>
                    </div>
                    <div className="col-sm-1">
                        <a href="">
                        </a>
                    </div>
                </div>
            </div>
        );
    }
});

export default Status;