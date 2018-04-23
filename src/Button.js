import React, { Component } from "react";
import Types from "prop-types";

class Button extends Component {
    getClassName = () => {
        return `super-select-button ${this.props.open ? "open" : ""}`;
    }

    getLabel = () => {
        let label = this.props.label;
        if (typeof this.props.contentLabelProvider === "function") {
            label = this.props.contentLabelProvider();
        }

        return (
            <span id="label"
                className="super-select-button-label"
                key="label-text"
            >
                { label }
            </span>
        );
    }

    render = () => {
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
                            { this.props.allSelectedLabel }
                        </span>
                    );
                } else if (this.props.noLabels === true) {
                    text.push(
                        <span className="super-select-button-label-value" key="allCount">
                            { this.props.value.length }
                        </span>
                    );
                } else {
                    this.props.value.map((item, index) => {
                        if (this.props.maxLabels === false || countValues < this.props.maxLabels) {
                            text.push(
                                <span className="super-select-button-label-value" key={ index }>
                                    { item[this.props.labelKey] }
                                </span>
                            );
                            countValues++;
                        }
                    });

                    if (this.props.maxLabels !== false && this.props.maxLabels < this.props.value.length) {
                        text.push(
                            <span className="super-select-button-label-value" key="-1">
                                 { this.props.moreSelectedLabel
                                     ? this.props.moreSelectedLabel
                                     : "mais ".concat((this.props.value.length - this.props.maxLabels).toString())
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
}

Button.propTypes = {
    label: Types.string,
    contentLabelProvider: Types.func,
    open: Types.bool,
    noLabels: Types.bool,
    multiple: Types.bool,
    allOptions: Types.arrayOf(Types.object),
    allSelectedLabel: Types.string,
    maxLabels: Types.oneOfType([Types.number, Types.bool]),
    labelKey: Types.string,
    moreSelectedLabel: Types.string,
    value: Types.oneOfType([Types.array, Types.object]),
    toggle: Types.func
};
export default Button;
