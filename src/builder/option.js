import React from 'react';

class Option extends React.Component {

    static propTypes = {
        value: React.PropTypes.string.isRequired,
        checked: React.PropTypes.bool.isRequired,
        onChangeOption: React.PropTypes.func.isRequired
    }

    render() {
        return (
            <div className="form-check form-check-inline">
                <label className="form-check-label">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue={ this.props.value }
                        checked={this.props.checked}
                        onChange={() => this.props.onChangeOption() }
                    />
                    { this.props.name }
                </label>
            </div>
        );
    }
}

export default Option;
