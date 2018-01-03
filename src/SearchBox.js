import React from "react";
import Types from "prop-types";

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount() {
        this.q.focus();
    }

    handleKeyPress(e) {
        if (["ArrowUp", "ArrowDown"].indexOf(e.key) > -1) {
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
                    ref={ input => { this.q = input; }}
                />
            </div>
        );
    }
}

SearchBox.displayName = "SearchBox";
SearchBox.defaultProps = {
    searchPlaceholder: "Digite para filtrar opção...",
    searchArgument: "",
    searchArgumentChange: null
};
SearchBox.propTypes = {
    searchPlaceholder: Types.string.isRequired,
    searchArgument: Types.string,
    searchArgumentChange: Types.func
};
export default SearchBox;
