import Types from "prop-types";
import React from "react";

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.getClassName = this.getClassName.bind(this);
        this.getLabel = this.getLabel.bind(this);
    }


    getClassName() {
        return "super-select-button" + (this.props.open ? " open" : "");
    }

    getLabel() {
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
    }

    render() {
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

Button.displayName = "SuperSelect.Button";
Button.defaultProps = {
};
Button.propTypes = {
};
export default Button;
