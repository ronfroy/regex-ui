import React from 'react';
import Rule from './rule-container';
import Option from './option-container';

class Builder extends React.Component {

    static propTypes = {
        options: React.PropTypes.array.isRequired,
        rules: React.PropTypes.array.isRequired,
        addRule: React.PropTypes.func.isRequired,
        resetRules: React.PropTypes.func.isRequired
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
                    onClick={this.props.addRule}
                >
                    <i className="fa fa-plus" aria-hidden="true"></i> Add rule
                </button>

                { this.props.rules.length ? (
                    <button
                        className="btn btn-secondary mb-2 mr-sm-2 mb-sm-0"
                        onClick={this.props.resetRules}
                    >
                        <i className="fa fa-less" aria-hidden="true"></i> Reset rules
                    </button>) : ''
                }

            </div>
        );
    }
}

export default Builder;
