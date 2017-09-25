import Types from "prop-types";
import React from "react";

class Action extends React.Component {
    constructor(props) {
        super(props);

        this.getContent = this.getContent.bind(this);
    }

    getContent() {
        return this.props.content || this.props.label;
    }

    render() {
        return (
            <li
                className="super-select-action"
                onClick={ this.props.handler }
            >
                { this.getContent() }
            </li>
        );
    }
}

Action.displayName = "SuperSelect.Action";
Action.defaultProps = {
    handler: function () {
        console.log("action clicked ;)");
    },
    label: "Action",
    content: null
};
Action.propTypes = {
    handler: Types.func,
    label: Types.string,
    content: Types.any
};
export default Action;
