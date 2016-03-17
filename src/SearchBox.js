var React = require("react");

var SearchBox = React.createClass({
    displayName: "SuperSelect.SearchBox",

    getDefaultProps: function () {
        "use strict";

        return {
            searchArgument: "",
            searchArgumentChange: null
        };
    },

    componentDidUpdate: function () {
        "use strict";

        this.refs.q.focus();
    },

    componentDidMount: function () {
        "use strict";

        this.refs.q.focus();
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
                    placeholder="Digite para filtrar opção..."
                    ref="q"
                />
            </div>
        );
    }
});

module.exports = SearchBox;
