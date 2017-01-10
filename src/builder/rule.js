import React from 'react';

class Rule extends React.Component {

    static propTypes = {
        identifier: React.PropTypes.number.isRequired,
        type: React.PropTypes.string.isRequired,
        value: React.PropTypes.string.isRequired,
        types: React.PropTypes.array.isRequired,
        changeType: React.PropTypes.func.isRequired,
        changeValue: React.PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);

        this.isValuable = this.isValuable.bind(this);
    }

    isValuable(type) {
        for (var i = 0, len = this.props.types.length; i < len; i++) {
            if(this.props.types[i].value === type) {
                return this.props.types[i].valuable;
            }
        }
        return false;
    }

    render() {
        return (
            <div>
                <div className="form-inline">
                    <div className="form-group row">
                        <select
                            className="custom-select form-control mb-2 mr-sm-2 mb-sm-0"
                            value={this.props.type}
                            onChange={(e) => { this.props.changeType(e.target.value) } }
                        >
                            { this.props.types.map((type) => (
                                <option key={type.value} value={type.value}>{type.name}</option>
                            ))}
                        </select>
                        <input
                            type="text"
                            className="form-control mb-3 mr-sm-3 mb-sm-0"
                            defaultValue={this.props.value}
                            readOnly={!this.isValuable(this.props.type)}
                            onKeyUp={(e) =>{ this.props.changeValue(e.target.value) }}
                            onChange={(e) =>{ this.props.changeValue(e.target.value) }}
                        />
                        <button
                            className="form-control btn btn-danger mb-3 mr-sm-3 mb-sm-0"
                            onClick={this.props.removeRule }
                        >
                            <i className="fa fa-trash" aria-hidden="true"></i> Remove
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Rule;