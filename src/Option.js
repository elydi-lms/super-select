import React, { Component } from "react";
import Types from "prop-types";

class Option extends Component {
    handleChange = () => {
        this.props.onChange(this.props.option);
    }

    render() {
        const type = this.props.multiple ? "checkbox" : "radio";
        let className = "super-select-options-list-item";

        if (this.props.pseudoHover) {
            className += " hover";
        }

        return (
            <li className={ className }>
                <label>
                    <input type={ type }
                        checked={ this.props.checked }
                        onChange={ this.handleChange }
                        tabIndex="-1"
                    />
                    { this.props.option[this.props.labelKey] }
                </label>
            </li>
        );
    }
}

Option.defaultProps = {
    pseudoHover: false,
    checked: false,
    onChange: null,
    labelKey: "name",
    multiple: false,
    option: {}
};
Option.propTypes = {
    option: Types.object,
    onChange: Types.func,
    checked: Types.bool,
    handleChange: Types.func,
    labelKey: Types.string,
    pseudoHover: Types.bool,
    multiple: Types.bool
};
export default Option;
