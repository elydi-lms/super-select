const React = require("react");

/**
 * @todo support max display items
 */
let Button = React.createClass({
    displayName: "SuperSelect.button",

    getDefaultProps: function () {
        "use strict";

        return {
            label: "",
            open: false,
            value: null,
            options: [],
            allOptions: [],
            valueKey: "id",
            labelKey: "name",
            multiple: true,
            maxLabels: false,
            noLabels: false,
            contentLabelProvider: null,
            allSelectedLabel: "todos",
            moreSelectedLabel: null
        };
    },

    getClassName: function () {
        "use strict";

        return "super-select-button" + (this.props.open ? " open" : "");
    },

    getLabel: function () {
        "use strict";

        let label = this.props.label;
        if (typeof this.props.contentLabelProvider === "function") {
            label = this.props.contentLabelProvider();
        }

        return (
            <span
                className="super-select-button-label"
                id="label"
                key="label-text"
            >
                { label }
            </span>
        );
    },

    render: function () {
        "use strict";

        let self = this;
        let className = this.getClassName();
        let text = [];
        let countValues = 0;
        let value = this.props.value;

        text.push(this.getLabel());

        // @todo improve this
        if (value && this.props.noLabels === false) {
            if (this.props.multiple && this.props.value.length) {
                text.push(": ");

                if (this.props.value.length === this.props.allOptions.length) {
                    text.push(
                        <span className="super-select-button-label-value" key="all">
                            {this.props.allSelectedLabel}
                        </span>
                    );
                } else if (this.props.noLabels === true) {
                    text.push(
                        <span className="super-select-button-label-value" key="allCount">
                            { this.props.value.length }
                        </span>
                    );
                } else {
                    this.props.value.map(function (item, index) {
                        if (self.props.maxLabels === false || countValues < self.props.maxLabels) {
                            text.push(
                                <span className="super-select-button-label-value" key={ index }>
                                    { item[self.props.labelKey] }
                                </span>
                            );
                            countValues++;
                        }
                    });

                    if (self.props.maxLabels !== false && self.props.maxLabels < self.props.value.length) {
                        text.push(
                            <span className="super-select-button-label-value" key="-1">
                                 { self.props.moreSelectedLabel
                                     ? self.props.moreSelectedLabel
                                     : "mais ".concat((self.props.value.length - self.props.maxLabels).toString())
                                 }
                            </span>
                        );
                    }
                }
            } else if (!this.props.multiple && this.props.value[this.props.labelKey]) {
                text.push(
                    <span className="super-select-button-label-value" key="selected">
                        { this.props.value[this.props.labelKey] }
                    </span>
                );
            }
        }

        return (
            <label
                className={ className }
                onClick={ this.props.toggle }
            >
                { text }
            </label>
        );
    }
});

module.exports = Button;
