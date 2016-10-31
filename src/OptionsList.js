const React = require("react");

const Option = require("./Option");

let OptionsList = React.createClass({
    displayName: "SuperSelect.OptionsList",

    getDefaultProps: function () {
        "use strict";

        return {
            options: [],
            isChecked: null,
            handleChange: null,
            currentHover: false,
            multiple: false,
            labelKey: "name"
        };
    },

    renderOptions: function () {
        "use strict";

        let self = this;
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

        return options.map(function (item, index) {
            let optionProps = {
                index: index,
                pseudoHover: index === self.props.currentHover,
                checked: self.props.isChecked(item),
                option: item,
                onChange: self.props.handleChange,
                labelKey: self.props.labelKey,
                multiple: self.props.multiple
            };

            if (self.props.optionRender) {
                return self.props.optionRender(optionProps);
            }

            return (
                <Option { ...optionProps } key={ index }/>
            );
        });
    },

    render: function () {
        "use strict";

        return (
            <div className="super-select-options-container">
                <ul className="super-select-options-list">
                    { this.renderOptions() }
                </ul>
            </div>
        );
    }
});

module.exports = OptionsList;
