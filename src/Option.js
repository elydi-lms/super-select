const React = require("react");

let Option = React.createClass({
    displayName: "SuperSelect.Option",

    getDefaultProps: function () {
        "use strict";

        return {
            pseudoHover: false,
            checked: false,
            onChange: null,
            labelKey: "name",
            multiple: false,
            option: {}
        };
    },

    handleChange: function () {
        "use strict";

        this.props.onChange(this.props.option);
    },

    render: function () {
        "use strict";

        let className = "super-select-options-list-item";
        let type = this.props.multiple ? "checkbox" : "radio";

        if (this.props.pseudoHover) {
            className += " hover";
        }

        return (
            <li className={ className }>
                <label>
                    <input
                        type={ type }
                        checked={ this.props.checked }
                        onChange={ this.handleChange }
                        tabIndex="-1"
                    />
                    { this.props.option[this.props.labelKey] }
                </label>
            </li>
        );
    }
});

module.exports = Option;
