/* eslint-env node, browser */
/* global React, SuperSelect, ReactDOM */

const MAX_LABELS = 2;

class Application extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selecteds: [],
            selected: {},
            tagsMode: [],
            selectMode: null,
            tagsModeOptions: [{
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
                label: "Blackberry"
            }],
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
                label: "Blackberry"
            }]
        };
    }


    render() {
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
                            maxLabels={ MAX_LABELS }
                            moreSelectedLabel={ (this.state.selecteds.length - MAX_LABELS).toString().concat(" more") }
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

                <div className="demo">
                    <h3>Tags mode</h3>
                    <div className="component">
                        <SuperSelect
                            label="The best OS"
                            options={ this.state.tagsModeOptions }
                            value={ this.state.tagsMode }
                            multiple
                            allowCreate
                            onCreate={ function (query, next) {
                                const newOption = {label: query, value: null};
                                let options = this.state.tagsModeOptions.slice();
                                options.push(newOption);

                                let selecteds = this.state.tagsMode.slice();
                                selecteds.push(newOption);

                                this.setState({
                                    tagsMode: selecteds,
                                    tagsModeOptions: options
                                }, next);
                            }.bind(this) }
                            onChange={ function (newSelected) {
                                this.setState({tagsMode: newSelected});
                            }.bind(this) }
                        />
                    </div>
                    <div className="state">
                        State: { JSON.stringify(this.state.tagsMode) }
                    </div>
                </div>

                <div className="demo">
                    <h3>Select mode</h3>
                    <p>This mode will use strings and numbers as values.</p>

                    <div className="component">
                        <SuperSelect
                            label="The best OS"
                            options={ this.state.options }
                            value={ this.state.selectMode }
                            multiple={ false }
                            selectLike
                            onChange={ function (newSelected) {
                                this.setState({selectMode: newSelected});
                            }.bind(this) }
                        />
                    </div>
                    <div className="state">
                        State: { JSON.stringify(this.state.selectMode) }
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Application />,
    document.querySelector(".react-root")
);
