import React from 'react';
import Rule from './rule-container';
import Option from './option-container';

class Builder extends React.Component {

    static propTypes = {
        options: React.PropTypes.array.isRequired,
        rules: React.PropTypes.array.isRequired,
        onAdd: React.PropTypes.func.isRequired,
        onReset: React.PropTypes.func.isRequired
    }

    render() {
        return (
            <div>
                <h2>Regex Builder</h2>

                { this.props.options.map((option) => (
                    <Option key={option.name} name={option.name} value={option.value} checked={option.active}/>
                ))}

                { this.props.rules.map((rule) => (
                    <Rule
                        key={rule.identifier}
                        identifier={rule.identifier}
                        type={rule.type}
                        value={rule.value}
                    />
                ))}
                <br/>
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
        );
    }
}

export default Builder;
