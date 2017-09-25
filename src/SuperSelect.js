import Types from "prop-types";
import React from "react";
import Fuse from "fuse.js";
import Button from "./Button";
import OptionsList from "./OptionsList";
import SearchBox from "./SearchBox";
import Actions from "./Actions";

class SuperSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            pseudoHover: null,
            q: ""
        };

        this.addSuperSelectToEvent = this.addSuperSelectToEvent.bind(this);
        this.closeOnClickOutside = this.closeOnClickOutside.bind(this);
        this.getAllOptions = this.getAllOptions.bind(this);
        this.getOptions = this.getOptions.bind(this);
        this.getValue = this.getValue.bind(this);
        this.buildbutton = this.buildbutton.bind(this);
        this.toggle = this.toggle.bind(this);
        this.isChecked = this.isChecked.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.dispatchChanges = this.dispatchChanges.bind(this);
        this.clean = this.clean.bind(this);
        this.selectAll = this.selectAll.bind(this);
        this.handleChangeQ = this.handleChangeQ.bind(this);
        this.handleNavigationKeys = this.handleNavigationKeys.bind(this);
        this.buildOptions = this.buildOptions.bind(this);
        this.buildSearchBox = this.buildSearchBox.bind(this);
        this.buildActions = this.buildActions.bind(this);
        this.buildContent = this.buildContent.bind(this);
    }

    componentDidMount() {
        this.container.addEventListener("click", this.addSuperSelectToEvent);
        document.addEventListener("click", this.closeOnClickOutside);
    }

    componentWillUnmount() {
        this.container.removeEventListener("click", this.addSuperSelectToEvent);
        document.removeEventListener("click", this.closeOnClickOutside);
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextState.open && typeof this.props.onOpen === "function") {
            this.props.onOpen();
        } else if(!nextState.open && typeof this.props.onClose === "function") {
            this.props.onClose();
        }
    }

    addSuperSelectToEvent(e) {
        // @todo i'm not happy with this
        e.superSelect = this;
    }

    closeOnClickOutside(e) {
        let eventSuperSelect = e.superSelect || false;
        if (!eventSuperSelect || eventSuperSelect !== this) {
            this.setState({
                open: false, q: "", pseudoHover: null
            });
        }
    }

    getAllOptions() {
        return this.props.options || [];
    }

    getOptions() {
        const options = this.props.options || [];
        const q = this.state.q;
        const fuse = new Fuse(options, {
            keys: this.props.searchKeys
        });

        if (!q.length) {
            return options.slice();
        }

        return fuse.search(q);
    }

    getValue() {
        let value;
        if (this.props.valueLink) {
            value = this.props.valueLink.value;
        } else {
            value = this.props.value;
        }

        if (value === undefined || value === null) {
            value = this.props.multiple ? [] : null;
        }

        return value;
    }

    buildbutton() {
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
                allSelectedLabel={ this.props.allSelectedLabel }
                moreSelectedLabel={ this.props.moreSelectedLabel }
            />
        );
    }

    toggle(forceState) {
        const newState = typeof forceState === "boolean" ? forceState : !this.state.open;
        this.setState({
            open: newState,
            q: newState ? this.state.q : "",
            pseudoHover: null
        });
    }

    isChecked(item, returnIndex) {
        const value = this.getValue();
        let index = false;
        let found = false;
        const valueKey = this.props.valueKey;

        if (!value) {
            return false;
        }

        if (this.props.multiple) {
            found = value.filter(function (option, i) {
                if (item[valueKey] == option[valueKey]) {
                    index = i;
                    return true;
                }
            }).length > 0;

            return returnIndex ? index : found;
        }

        return item[valueKey] == value[valueKey];
    }

    handleChange(item) {
        let value = this.getValue();
        let current;

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
    }

    dispatchChanges(newValue) {
        if (this.props.valueLink) {
            this.props.valueLink.requestChange(newValue);
        } else if (typeof this.props.onChange === "function") {
            this.props.onChange(newValue);
        }

        if (!this.props.multiple) {
            this.setState({
                open: false,
                q: ""
            });
        }
    }

    clean() {
        this.dispatchChanges(
            this.props.multiple ? [] : null
        );
    }

    selectAll() {
        this.dispatchChanges(this.getOptions());
    }

    handleChangeQ(event) {
        this.setState({
            q: event.target.value,
            pseudoHover: null
        });
    }

    handleNavigationKeys(e) {
        "use strict";

        const isEnter = e.key === "Enter";
        const container = this.container;
        let q = this.state.q;
        let currentPosition = this.state.pseudoHover || 0;
        let open = this.state.open;
        let mustRetainFocus = false;

        if (isEnter) {
            e.preventDefault();
        }

        if (isEnter && !isNaN(currentPosition) && open) {
            let option = this.getOptions()[currentPosition] || false;
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
            mustRetainFocus = true;
            q = "";
        }

        this.setState({
            open: open,
            pseudoHover: currentPosition,
            q: q
        }, function () {
            if (mustRetainFocus) {
                container.focus();
            }
        });
    }

    buildOptions() {
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
    }

    buildSearchBox() {
        return (
            <SearchBox
                searchArgument={ this.state.q }
                searchArgumentChange={ this.handleChangeQ }
                searchKeys={ this.props.searchKeys }
                searchPlaceholder={ this.props.searchPlaceholder }
                key="search-box"
            />
        );
    }

    buildActions() {
        let actions = [];
        if (this.props.options.length && this.props.multiple === true) {
            actions.push({
                label: this.props.selectAllLabel,
                handler: this.selectAll
            });
            actions.push({
                label: this.props.clearAllLabel,
                handler: this.clean
            });
        }
        actions = actions.concat(this.props.actions);

        return <Actions actions={ actions } key="actions" />;
    }

    buildContent() {
        let content = [];

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
    }

    render() {
        return (
            <div
                className={"super-select-container" + (this.state.open ? " open" : "")}
                ref="container"
                onKeyDown={ this.handleNavigationKeys }
                tabIndex={ this.props.tabIndex }
            >
                { this.buildbutton() }
                { this.buildContent() }
            </div>
        );
    }
}

SuperSelect.displayName = "SuperSelect";
SuperSelect.defaultProps = {
    actions: [],
    allItemsSelectedLabel: "todos",
    clearAllLabel: "✘ Limpar seleção",
    labelKey: "label",
    maxLabels: false,
    multiple: true,
    noLabels: false,
    options: [],
    searchBox: true,
    searchKeys: ["label"],
    searchPlaceholder: "Digite para filtrar opção...",
    selectAllLabel: "✓ Selecionar todos",
    valueKey: "value",
    // html attrs
    tabIndex: 0
};
SuperSelect.propTypes = {
    actions: Types.arrayOf(
        Types.shape({
            handler: Types.func.isRequired,
            label: Types.string.isRequired,
            content: Types.element
        })
    ),
    allSelectedLabel: Types.string,
    clearAllLabel: Types.string,
    content: Types.node,
    contentLabelProvider: Types.func,
    groups: Types.array,
    label: Types.string.isRequired,
    labelKey: Types.string,
    maxLabels: Types.oneOfType([
        Types.number,
        Types.bool
    ]),
    moreSelectedLabel: Types.string,
    multiple: Types.bool,
    noLabels: Types.bool,
    onChange: Types.func,
    onClose: Types.func,
    onOpen: Types.func,
    options: Types.array,
    optionRender: Types.func,
    searchBox: Types.bool,
    searchKeys: Types.arrayOf(
        Types.string
    ),
    searchPlaceholder: Types.string,
    selectAllLabel: Types.string,
    value: Types.oneOfType([
        Types.object,
        Types.arrayOf(
            Types.object
        )
    ]),
    valueKey: Types.string,
    valueLink: Types.object
};
export default SuperSelect;
