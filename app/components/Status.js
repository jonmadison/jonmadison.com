import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

let Status = React.createClass({
    render: function() {
        return (
            <div id="status-component">
                <div className="row status-component">
                    <div className="col-sm-1">
                        <a href="">
                            <i className="icon ion-arrow-left-b"></i>
                        </a>
                    </div>
                    <div className="col-sm-10">
                        <ReactCSSTransitionGroup
                        transitionName="status-appear"
                        transitionAppear={true}
                        transitionAppearTimeout={500}
                        transitionEnterTimeout={0}
                        transitionLeaveTimeout={0}>
                            <p className="status">
                            {this.props.statuses.data[Number.parseInt(this.props.index)].text}
                            </p>
                        </ReactCSSTransitionGroup>
                    </div>
                    <div className="col-sm-1">
                        <a href="">
                            <i className="icon ion-arrow-right-b"></i>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
});

export default Status;