import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
                        transitionAppearTimeout={10000}
                        transitionEnterTimeout={100000}
                        transitionLeaveTimeout={10000}>
                            <p className="status">
                            {this.props.statuses.data[Number.parseInt(this.props.index)].text}
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