import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

let FeatureBox = React.createClass({
    render: function() {
        return (
                <a href="./#/learning">
                    <div className="feature-box" id="{this.props.name}">
                        <h1>{this.props.name}</h1>
                        <ul>
                            {
                                this.props.items.map( (item) => {
                                    return <li>{item}</li>;
                                })
                            }
                        </ul>
                    </div>
                </a>
        );
    }
});

export default FeatureBox;