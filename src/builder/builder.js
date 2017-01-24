import React from 'react'
import Rule from './rule-container'
import Option from './option'

class Builder extends React.Component {

    static propTypes = {
        options: React.PropTypes.array.isRequired,
        rules: React.PropTypes.array.isRequired,
        onAdd: React.PropTypes.func.isRequired,
        onReset: React.PropTypes.func.isRequired,
        onOptionChange: React.PropTypes.func.isRequired,
    }

    render() {
        return (
            <div>
                <h2>Regex Builder</h2>

                { this.props.options.map((option) => (
                    <Option
                        key={option.name}
                        name={option.name}
                        value={option.value}
                        checked={option.active}
                        onChangeOption={this.props.onOptionChange}
                    />
                ))}

                <table className="table">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Value</th>
                        <th>Min</th>
                        <th>Max</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                    <tbody>
                        { this.props.rules.map((rule) => (
                            <Rule
                                key={rule.identifier}
                                identifier={rule.identifier}
                                type={rule.type}
                                value={rule.value}
                                repeat_min={rule.repeat_min}
                                repeat_max={rule.repeat_max}
                            />
                        ))}
                    </tbody>
                </table>
                <button
                    className="btn btn-primary mb-2 mr-sm-2 mb-sm-0"
                    onClick={ this.props.onAdd }
                >
                    <i className="fa fa-plus" aria-hidden="true"></i> Add rule
                </button>

                { this.props.rules.length ? (
                    <button
                        className="btn btn-danger mb-2 mr-sm-2 mb-sm-0"
                        onClick={ this.props.onReset }
                    >
                        <i className="fa fa-trash" aria-hidden="true"></i>
                        <i className="fa fa-less" aria-hidden="true"></i> Reset
                    </button>) : ''
                }

            </div>
        )
    }
}

export default Builder
