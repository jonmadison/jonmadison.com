import React from "react";

let LinkButtons = React.createClass({
    render: function() {
        return (
            <div className="link-buttons">
                <ul>
                    <li>
                        <a href="https://www.twitter.com/jonmadison/"><img src="images/logos/TwitterLogo_white.png" alt="Twitter"/></a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/jonmadisonphoto/"><img src="images/logos/FB-f-Logo__white_100.png" alt="Facebook"/></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/"><img src="images/logos/In-White-101px-R.png" alt="LinkedIn"/></a>
                    </li>
                    <li>
                        <a href="http://jonmadison.bandcamp.com/music"><img src="images/logos/bclogowhite.png" alt="bandcamp"/></a>
                    </li>
                </ul>
            </div>
        );
    }
});

export default LinkButtons;