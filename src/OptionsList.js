import React, { Component } from "react";
import Types from "prop-types";

import Option from "./Option";

class OptionsList extends Component {
    renderOptions = () => {
        let options = this.props.options;
        if (!options.length) {
            return (
                <li
                    className="super-select-options-list-item not-found"
                    key="not-found"
                >
                    { this.props.noResultsLabel }
                </li>
            );
        }

        return options.map((item, index) => {
            let optionProps = {
                index: index,
                pseudoHover: index === this.props.currentHover,
                checked: this.props.isChecked(item),
                option: item,
                onChange: this.props.handleChange,
                labelKey: this.props.labelKey,
                multiple: this.props.multiple
            };

            if (this.props.optionRender) {
                return this.props.optionRender(optionProps);
            }

            return (
                <Option { ...optionProps } key={ index } />
            );
        });
    }

    render() {
        return (
            <div className="super-select-options-container">
                <ul className="super-select-options-list">
                    { this.renderOptions() }
                </ul>
            </div>
        );
    }
}

OptionsList.defaultProps = {
    options: [],
    isChecked: null,
    handleChange: null,
    currentHover: false,
    multiple: false,
    labelKey: "name",
    allowCreate: false
};
OptionsList.propTypes = {
    options: Types.array,
    isChecked: Types.func,
    handleChange: Types.func,
    currentHover: Types.oneOfType([Types.bool, Types.number]),
    multiple: Types.bool,
    labelKey: Types.string,
    allowCreate: Types.bool,
    optionRender: Types.func,
    noResultsLabel: Types.string,
};
export default OptionsList;
