import React from 'react';

class Option extends React.Component {

    static propTypes = {
        value: React.PropTypes.string.isRequired,
        checked: React.PropTypes.bool.isRequired,
        changeOption: React.PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);

        this.state = {
            checked: props.checked
        };
    }

    onChange(e) {
        var checked = !this.state.checked;
        this.setState({ checked: checked  });
        this.props.changeOption(checked);
    }

    render() {
        return (
            <div className="form-check form-check-inline">
                <label className="form-check-label">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue={ this.props.value }
                        checked={this.state.checked}
                        onChange={this.onChange }
                    />
                    { this.props.name }
                </label>
            </div>
        );
    }
}

export default Option;
