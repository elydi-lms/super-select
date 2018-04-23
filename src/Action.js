import React, { Component } from "react";
import Types from "prop-types";

class Action extends Component {
    constructor(props) {
        super(props);
    }

    getContent = () => {
        return this.props.content || this.props.label;
    }

    render = () => {
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

Action.defaultProps = {
    content: null
};
Action.propTypes = {
    handler: Types.func.isRequired,
    label: Types.string.isRequired,
    content: Types.any
};
export default Action;
