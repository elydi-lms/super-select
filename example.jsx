var Application = React.createClass({
    displayName: "Application",
    maxLabels: 2,

    getInitialState: function () {
        return {
            selecteds: [],
            selected: {},
            options: [{
                value: 1,
                label: "Android"
            }, {
                value: 2,
                label: "iOS"
            }, {
                value: 3,
                label: "Windows Phone"
            }, {
                value: 4,
                label: "Blackburry"
            }]
        };
    },

    render: function () {
        return (
            <div>
                <div className="demo">
                    <h3>Simple multiple</h3>
                    <div className="component">
                        <SuperSelect
                            tabIndex={ 0 }
                            label="Filter by OS"
                            options={ this.state.options }
                            value={ this.state.selecteds }
                            onChange={ function (newSelecteds) {
                                this.setState({selecteds: newSelecteds});
                            }.bind(this) }
                            searchPlaceholder="Filter items..."
                            clearAllLabel="Clear all"
                            selectAllLabel="Select all"
                            allSelectedLabel={ this.state.selecteds.length.toString().concat(" selected") }
                            maxLabels={this.maxLabels}
                            moreSelectedLabel={ (this.state.selecteds.length - this.maxLabels).toString().concat(" more") }
                            onOpen={ function () {
                                console.log("opened")
                            }.bind(this) }
                            onClose={ function () {
                                console.log("closed")
                            }.bind(this) }
                        />
                    </div>
                    <div className="state">
                        State: { JSON.stringify(this.state.selecteds) }
                    </div>
                </div>

                <div className="demo">
                    <h3>Multiple with option render</h3>
                    <div className="component">
                        <SuperSelect
                            label="Filter by OS"
                            options={ this.state.options }
                            value={ this.state.selecteds }
                            optionRender={ function (config) {
                                return (
                                    <li onClick={ config.onChange.bind(null, config.option) }
                                        key={ config.index }
                                    >
                                        Option: { config.option.name }
                                        | index: { config.index }
                                        | pseudoHover: { config.pseudoHover ? " sim" : " não" }
                                    </li>
                                );
                            } }
                            onChange={ function (newSelecteds) {
                                this.setState({selecteds: newSelecteds});
                            }.bind(this) }
                        />
                    </div>
                    <div className="state">
                        State: { JSON.stringify(this.state.selecteds) }
                    </div>
                </div>
                <div className="demo">
                    <h3>Single</h3>
                    <div className="component">
                        <SuperSelect
                            label="The best OS"
                            options={ this.state.options }
                            value={ this.state.selected }
                            multiple={ false }
                            onChange={ function (newSelected) {
                                this.setState({selected: newSelected});
                            }.bind(this) }
                        />
                    </div>
                    <div className="state">
                        State: { JSON.stringify(this.state.selected) }
                    </div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <Application />,
    document.querySelector(".react-root")
);
