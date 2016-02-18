import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import UniqueId from 'lodash.uniqueid';

require("style!css!../../public/css/FeatureBox.css");

let FeatureBox = React.createClass({
    render: function() {
        return (
            <ReactCSSTransitionGroup
            transitionName="feature-box-load"
            transitionAppear={true}
            transitionAppearTimeout={this.props.appearTimeout || 300}
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}>
                <div key={UniqueId()} className="feature-box" id={this.props.name}>
                    <h1>{this.props.name}</h1>
                    <ul>
                        {
                            this.props.items.map( (item) => {
                                return <li key={UniqueId()}>{item}</li>;
                            })
                        }
                    </ul>
                </div>
            </ReactCSSTransitionGroup>
        );
    }
});

export default FeatureBox;