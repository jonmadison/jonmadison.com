import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

require("style!css!../../public/css/Status.css");

let Status = React.createClass({
    render: function() {
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
                            <p className="status">
                            {this.props.statuses.data[Number.parseInt(this.props.index)].text}
                            </p>
                            <p className="status-date">
                            posted {this.props.statuses.data[Number.parseInt(this.props.index)].date}
                            </p>
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