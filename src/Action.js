var React = require("react");

var Action = React.createClass({
    displayName: "SuperSelect.Action",

    getDefaultProps: function () {
        "use strict";

        return {
            handler: function () {
                console.log("action clicked ;)");
            },
            label: "Action",
            icon: null,
            content: null
        };
    },

    getContent: function () {
        "use strict";

        return this.props.content || this.props.label;
    },

    getIcon: function () {
        "use strict";

        return <span>noicon</span>;
    },

    render: function () {
        "use strict";

        return (
            <li className="super-select-action"
                onClick={ this.props.handler }
            >
                { this.getIcon() }
                { this.getContent() }
            </li>
        );
    }
});

module.exports = Action;
