import React from 'react'

class Rule extends React.Component {

    static propTypes = {
        identifier: React.PropTypes.string.isRequired,
        type: React.PropTypes.string.isRequired,
        value: React.PropTypes.string.isRequired,
        types: React.PropTypes.array.isRequired,
        repeat_min: React.PropTypes.string.isRequired,
        repeat_max:React.PropTypes.string.isRequired,
        onChangeType: React.PropTypes.func.isRequired,
        onChangeValue: React.PropTypes.func.isRequired,
        onChangeRepeatMin: React.PropTypes.func.isRequired,
        onChangeRepeatMax: React.PropTypes.func.isRequired,
        onRemove: React.PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this.isValuable = this.isValuable.bind(this)
        this.isRepeatable = this.isRepeatable.bind(this)
    }

    isValuable(type) {
        for (var i = 0, len = this.props.types.length; i < len; i++) {
            if(this.props.types[i].value === type) {
                return this.props.types[i].valuable
            }
        }
        return false
    }

    isRepeatable(type) {
        for (var i = 0, len = this.props.types.length; i < len; i++) {
            if(this.props.types[i].value === type) {
                return this.props.types[i].repeatable
            }
        }
        return false
    }

    render() {
        const valuable = this.isValuable(this.props.type)
        const repeatable = this.isRepeatable(this.props.type)
        return (
            <tr scope="row">
                <td>
                     <select
                        className="custom-select form-control mb-2 mr-sm-2 mb-sm-0"
                        value={this.props.type}
                        onChange={(e) => { this.props.onChangeType(e.target.value) } }
                    >
                        { this.props.types.map((type) => (
                            <option key={type.value} value={type.value}>{type.name}</option>
                        ))}
                    </select>
                </td>
                <td>
                    { valuable ? (
                    <input
                        type="text"
                        className="form-control mb-3 mr-sm-3 mb-sm-0"
                        value={this.props.value}
                        onKeyUp={(e) =>{ this.props.onChangeValue(e.target.value) }}
                        onChange={(e) =>{ this.props.onChangeValue(e.target.value) }}
                    />
                    ) : '' }
                </td>
                <td>
                    { repeatable ? (
                        <input
                            type="text"
                            className="form-control mb-3 mr-sm-3 mb-sm-0"
                            size="1"
                            value={this.props.repeat_min ? this.props.repeat_min : '*'}
                            onKeyUp={(e) =>{ this.props.onChangeRepeatMin(e.target.value) }}
                            onChange={(e) =>{ this.props.onChangeRepeatMin(e.target.value) }}
                        />
                    ) : '' }
                </td>
                <td>
                    { repeatable ? (
                    <input
                        type="text"
                        className="form-control mb-3 mr-sm-3 mb-sm-0"
                        size="1"
                        value={this.props.repeat_max ? this.props.repeat_max : '*'}
                        onKeyUp={(e) =>{ this.props.onChangeRepeatMax(e.target.value) }}
                        onChange={(e) =>{ this.props.onChangeRepeatMax(e.target.value) }}
                    />
                    ) : '' }
                </td>
                <td>
                    <button
                        className="form-control btn btn-danger mb-3 mr-sm-3 mb-sm-0"
                        onClick={this.props.onRemove }
                    >
                        <i className="fa fa-trash" aria-hidden="true"></i> Remove
                    </button>
                </td>
            </tr>
        )
    }
}

export default Rule
