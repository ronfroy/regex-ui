import React from 'react';

class Option extends React.Component {

    static propTypes = {
        name: React.PropTypes.string.isRequired,
        value: React.PropTypes.string.isRequired,
        checked: React.PropTypes.bool.isRequired,
        onChangeOption: React.PropTypes.func.isRequired
    }

    render() {
        return (
            <div className="form-check form-check-inline">
                <label className="custom-control custom-radio">
                    <input
                        type="radio"
                        className="custom-control-input"
                        defaultValue={ this.props.value }
                        checked={this.props.checked}
                        onChange={() => this.props.onChangeOption(this.props.name) }
                    />
                    <span className="custom-control-indicator"> </span>
                    <span className="custom-control-description">{ this.props.name }</span>
                </label>
            </div>
        );
    }
}

export default Option;
