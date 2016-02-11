import React from "react";
import Status from "./Status";
import Learning from "./Learning";
import Doing from "./Doing";
import LinkButtons from "./LinkButtons";

let Home = React.createClass({
    render: function() {
        return (
            <div className="home-container">
              <div className="row text-center">
                <h3>
                    <Status/>
                </h3>
              </div>
              <div className="row" id="sharing">
              </div>
              <div className="row">
                <div className="col-sm-5 feature-box" id="learning">
                    <Learning/>
                </div>
                <div className="col-sm-2">
                    &nbsp;
                </div>
                <div className="col-sm-5 feature-box" id="doing">
                    <Doing/>
                </div>
              </div>
              <div className="row">
                  jon madison is a technologist, continuous learner, picture taker,
                  and sharer currently working in Seattle, Washington.
              </div>
              <div className="row">
                <LinkButtons/>
                </div>
            </div>
        );
    }
});

export default Home;