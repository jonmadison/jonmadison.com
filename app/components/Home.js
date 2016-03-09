import React from "react";
import Status from "./Status";
import FeatureBox from "./FeatureBox";
import LinkButtons from "./LinkButtons";

let Home = React.createClass({
    componentWillMount: function() {

    },
    getInitialState: function() {
        //Orchestrate data fetching of local sources.
        //Gallery component is responsible for its own fetching from outside
        //services.
        let result = {
            learning: ["React & Friends", "Swift 2.0", "Rx"],
            doing: ["iOS Development", "Web Dev", "APIs"],
            showing: ["Ppl how to node", "How to build Web APIs", "Empathy"]
        };
        return result;
    },

    render: function() {
        return (
            <div className="container-fluid">
                <Status index="0" />
                <div className="row center-block">
                    <FeatureBox name="learning" items={this.state.learning} appearTimeout={300}/>
                    <FeatureBox name="doing" items={this.state.doing} appearTimeout={600}/>
                    <FeatureBox name="showing" items={this.state.showing} appearTimeout={900} />
                </div>
                <div className="row description">
                    <div className="center-block">
                      jon madison is a full-stack technologist, continuous learner, picture taker,
                      and sharer currently working in Seattle, Washington.
                    </div>
                </div>
                <div className="row">
                    <LinkButtons/>
                </div>
          </div>
        );
    }
});

export default Home;