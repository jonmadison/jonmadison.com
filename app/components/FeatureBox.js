import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import uniqueid from 'lodash.uniqueid';

let FeatureBox = React.createClass({
    render: function() {
        return (
                <a href="./#/learning">
                    <ReactCSSTransitionGroup
                    transitionName="feature-box-load"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>
                        <div key={uniqueid()} className="feature-box" id={this.props.name}>
                            <h1>{this.props.name}</h1>
                            <ul>
                                {
                                    this.props.items.map( (item) => {
                                        return <li key={uniqueid()}>{item}</li>;
                                    })
                                }
                            </ul>
                        </div>
                    </ReactCSSTransitionGroup>
                </a>
        );
    }
});

export default FeatureBox;