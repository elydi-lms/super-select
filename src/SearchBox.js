import React, { Component } from "react";
import Types from "prop-types";

class SearchBox extends Component {
    componentDidMount() {
        this.q.focus();
    }

    handleKeyPress = (e) => {
        if (["ArrowUp", "ArrowDown"].includes(e.key)) {
            e.preventDefault();
        }
    }

    render() {
        return (
            <div className="super-select-options-search-container">
                <input
                    className="form-control"
                    type="search"
                    value={ this.props.searchArgument }
                    onChange={ this.props.searchArgumentChange }
                    onKeyDown={ this.handleKeyPress }
                    placeholder={ this.props.searchPlaceholder }
                    ref={ input => { this.q = input; } }
                />
            </div>
        );
    }
}

SearchBox.defaultProps = {
    searchPlaceholder: "",
    searchArgument: "",
    searchArgumentChange: null
};
SearchBox.propTypes = {
    searchPlaceholder: Types.string.isRequired,
    searchArgument: Types.string,
    searchArgumentChange: Types.func
};
export default SearchBox;
