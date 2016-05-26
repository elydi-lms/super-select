var React = require("react");

var SearchBox = React.createClass({
    displayName: "SuperSelect.SearchBox",

    getDefaultProps: function () {
        "use strict";

        return {
            searchPlaceholder: "Digite para filtrar opção...",
            searchArgument: "",
            searchArgumentChange: null
        };
    },

    componentDidMount: function () {
        "use strict";

        this.refs.q.focus();
    },

    handleKeyPress: function (e) {
        "use strict";

        if (["ArrowUp", "ArrowDown"].indexOf(e.key) > -1) {
            e.preventDefault();
        }
    },

    render: function () {
        "use strict";

        return (
            <div className="super-select-options-search-container">
                <input
                    className="form-control"
                    type="search"
                    value={ this.props.searchArgument }
                    onChange={ this.props.searchArgumentChange }
                    onKeyDown={ this.handleKeyPress }
                    placeholder={ this.props.searchPlaceholder }
                    ref="q"
                />
            </div>
        );
    }
});

module.exports = SearchBox;
