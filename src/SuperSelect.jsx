var React = require("react");
var Fuse = require("fuse.js");

var Button = require("./Button.jsx");
var OptionsList = require("./OptionsList.jsx");
var Actions = require("./Actions.jsx");
var SearchBox = require("./SearchBox.jsx");

var SuperSelect = React.createClass({
    displayName: "SuperSelect",

    propTypes: {
        actions: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                handler: React.PropTypes.func.isRequired,
                label: React.PropTypes.string.isRequired,
                content: React.PropTypes.element
            })
        ),
        content: React.PropTypes.node,
        contentLabelProvider: React.PropTypes.func,
        groups: React.PropTypes.array,
        label: React.PropTypes.string.isRequired,
        labelKey: React.PropTypes.string,
        maxLabels: React.PropTypes.oneOfType([
            React.PropTypes.number,
            React.PropTypes.bool
        ]),
        multiple: React.PropTypes.bool,
        noLabels: React.PropTypes.bool,
        onChange: React.PropTypes.func,
        options: React.PropTypes.array,
        optionRender: React.PropTypes.func,
        searchBox: React.PropTypes.bool,
        searchKeys: React.PropTypes.arrayOf(
            React.PropTypes.string
        ),
        value: React.PropTypes.oneOfType([
            React.PropTypes.object,
            React.PropTypes.arrayOf(
                React.PropTypes.object
            )
        ]),
        valueKey: React.PropTypes.string,
        valueLink: React.PropTypes.object
    },

    getDefaultProps: function () {
        "use strict";

        return {
            actions: [],
            labelKey: "name",
            maxLabels: false,
            multiple: true,
            noLabels: false,
            options: [],
            searchBox: true,
            searchKeys: ["name"],
            valueKey: "id",
            // html attrs
            tabIndex: 0
        };
    },

    getInitialState: function () {
        "use strict";

        return {
            open: false,
            pseudoHover: null,
            q: ""
        };
    },

    componentDidMount: function () {
        "use strict";

        this.refs.container.addEventListener("click", this.addSuperSelectToEvent);
        document.addEventListener("click", this.closeOnClickOutside);
    },

    componentWillUnmount: function () {
        "use strict";

        this.refs.container.removeEventListener("click", this.addSuperSelectToEvent);
        document.removeEventListener("click", this.closeOnClickOutside);
    },

    addSuperSelectToEvent: function (e) {
        "use strict";

        // @todo i'm not happy with this
        e.superSelect = this;
    },

    closeOnClickOutside: function (e) {
        "use strict";
        var eventSuperSelect = e.superSelect || false;
        if (!eventSuperSelect || eventSuperSelect !== this) {
            this.setState({
                open: false,
                pseudoHover: null
            });
        }
    },

    getAllOptions: function () {
        "use strict";

        return this.props.options || [];
    },

    getOptions: function () {
        "use strict";

        var options = this.props.options || [];
        var q = this.state.q;
        var fuse = new Fuse(options, {
            keys: this.props.searchKeys,
            threshold: 0.4
        });

        if (!q.length) {
            return options;
        }

        return fuse.search(q);
    },

    getValue: function () {
        "use strict";

        var value;
        if (this.props.valueLink) {
            value = this.props.valueLink.value;
        } else {
            value = this.props.value;
        }

        if (value === undefined || value === null) {
            value = this.props.multiple ? [] : null;
        }

        return value;
    },

    buildbutton: function () {
        "use strict";

        return (
            <Button
                label={ this.props.label }
                contentLabelProvider={ this.props.contentLabelProvider }
                open={ this.state.open }
                value={ this.getValue() }
                options={ this.getOptions() }
                allOptions={ this.getAllOptions() }
                valueKey={ this.props.valueKey }
                labelKey={ this.props.labelKey }
                multiple={ this.props.multiple }
                toggle={ this.toggle }
                maxLabels={ this.props.maxLabels }
                noLabels={ this.props.noLabels }
                tabIndex={ this.props.tabIndex }
                handleFocus={ this.handleFocus }
            />
        );
    },

    toggle: function (forceState) {
        "use strict";

        var newState = typeof forceState === "boolean" ? forceState : !this.state.open;
        this.setState({
            open: newState,
            pseudoHover: null
        });
    },

    isChecked: function (item, returnIndex) {
        "use strict";

        var index = false;
        var value = this.getValue();
        var found = false;
        var valueKey = this.props.valueKey;

        if (this.props.multiple) {
            found = value.filter(function (option, i) {
                if (item.id == option.id) {
                    index = i;
                    return true;
                }
            }).length > 0;

            return returnIndex ? index : found;
        }

        return item[valueKey] == value[valueKey];
    },

    handleChange: function (item) {
        "use strict";

        var value = this.getValue();
        var current;

        if (this.props.multiple) {
            current = this.isChecked(item, true);

            if (current !== false) {
                value.splice(current, 1);
            } else {
                value.push(item);
            }
        } else {
            value = item;
        }

        this.dispatchChanges(value);
    },

    dispatchChanges: function (newValue) {
        "use strict";

        if (this.props.valueLink) {
            this.props.valueLink.requestChange(newValue);
        } else if (typeof this.props.onChange === "function") {
            this.props.onChange(newValue);
        }
    },

    clean: function () {
        "use strict";

        this.dispatchChanges(
            this.props.multiple ? [] : null
        );
    },

    selectAll: function () {
        "use strict";

        this.dispatchChanges(this.getOptions());
    },

    handleChangeQ: function (event) {
        "use strict";

        this.setState({
            q: event.target.value,
            pseudoHover: null
        });
    },

    handleNavigationKeys: function (e) {
        "use strict";

        var currentPosition = this.state.pseudoHover;
        var isEnter = e.key === "Enter";
        var open = this.state.open;
        var self = this;

        if (isEnter && !isNaN(currentPosition) && open) {
            var option = this.getOptions()[currentPosition] || false;
            if (option) {
                this.handleChange(option);
            }
        }

        switch (e.key) {
            case "ArrowUp":
                currentPosition = !currentPosition ? 0 : currentPosition - 1;
                open = true;
                break;
            case "ArrowDown":
                currentPosition = currentPosition + 1 === this.getOptions().length ? currentPosition : currentPosition + 1;
                open = true;
                break;
        }

        if (["Escape", "Tab"].indexOf(e.key) > -1) {
            open = false;
        }

        this.setState({
            open: open,
            pseudoHover: currentPosition
        }, function () {
            if (open === false) {
                self.refs.container.focus();
            }
        });
    },

    buildOptions: function () {
        "use strict";

        return (
            <OptionsList
                options={ this.getOptions() }
                optionRender={ this.props.optionRender }
                handleNavigationKeys={ this.handleNavigationKeys }
                isChecked={ this.isChecked }
                handleChange={ this.handleChange }
                currentHover={ this.state.pseudoHover }
                labelKey={ this.props.labelKey }
                actions={ this.props.actions }
                multiple={ this.props.multiple }
                key="options-list"
            />
        );
    },

    buildSearchBox: function () {
        "use strict";

        return (
            <SearchBox
                searchArgument={ this.state.q }
                searchArgumentChange={ this.handleChangeQ }
                searchKeys={ this.props.searchKeys }
                key="search-box"
            />
        );
    },

    buildActions: function () {
        "use strict";

        var actions = [];
        if (this.props.options.length && this.props.multiple === true) {
            actions.push({
                label: "Selecionar todos",
                handler: this.selectAll,
                icon: "ok"
            });
            actions.push({
                label: "Limpar seleção",
                handler: this.clean,
                icon: "remove"
            });
        }
        actions = actions.concat(this.props.actions);

        return <Actions actions={ actions } key="actions" />;
    },

    buildContent: function () {
        "use strict";

        var content = [];

        if (this.state.open) {
            if (this.props.searchBox) {
                content.push(this.buildSearchBox());
            }

            content.push(this.buildActions());
            content.push(this.props.content || this.buildOptions());

            return (
                <div className="super-select-content">
                    { content }
                </div>
            );
        }
    },

    render: function () {
        "use strict";

        return (
            <div
                className="super-select-container"
                ref="container"
                onKeyDown={ this.handleNavigationKeys }
                tabIndex={ this.props.tabIndex }
            >
                { this.buildbutton() }
                { this.buildContent() }
            </div>
        );
    }
});

module.exports = SuperSelect;
