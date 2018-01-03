import React from "react";
import Types from "prop-types";

import Action from "./Action";

class Actions extends React.Component {
    render() {
        return (
            <ul className="super-select-actions">
                { this.props.actions.map((action, index) => <Action { ...action } key={ index }/>) }
            </ul>
        );
    }
}

Actions.displayName = "SuperSelect.Actions";
Actions.defaultProps = {
    actions: []
};
Actions.propTypes = {
    actions: Types.array
};
export default Actions;
