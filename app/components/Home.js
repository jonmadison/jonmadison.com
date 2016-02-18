import React from "react";
import Status from "./Status";
import FeatureBox from "./FeatureBox";
import LinkButtons from "./LinkButtons";

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

let Home = React.createClass({
    componentWillMount: function() {

    },
    getInitialState: function() {
        //Orchestrate data fetching of local sources.
        //Gallery component is responsible for its own fetching from outside
        //services.
        let result = { statuses: fetchStatuses(),
                 learning: ["React & Friends", "Swift 2.0", "Rx"],
                 doing: ["iOS Development", "APIs", "TDD", "Inspiring ppl"],
                 showing: ["Ppl how to node", "How to build Web APIs", "Empathy"]
                };
        return result;

    },

    render: function() {
        return (
            <div className="container-fluid">
                  <Status statuses={this.state.statuses} index="0" />
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