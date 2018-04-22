import Types from "prop-types";
import React from "react";
import Option from "./Option";

class OptionsList extends React.Component {
    constructor(props) {
        super(props);
        this.renderOptions = this.renderOptions.bind(this);
    }

    renderOptions() {
        "use strict";

        let options = this.props.options;
        if (!options.length) {
            return (
                <li
                    className="super-select-options-list-item not-found"
                    key="not-found"
                >
                    Nada encontrado :/
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

OptionsList.displayName = "OptionsList";
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
};
export default OptionsList;
