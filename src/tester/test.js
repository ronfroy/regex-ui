import React from 'react';

class Test extends React.Component {

    static propTypes = {
        subject: React.PropTypes.string.isRequired,
        match: React.PropTypes.bool.isRequired,
    }

    render() {
        if (this.props.match) {
            return (
                <div className="form-group row has-success">
                    <textarea type="text" className="form-control form-control-success" readOnly={true} value={this.props.subject}/>
                </div>
            );
        }

        return (
            <div className="form-group row has-danger">
                <textarea type="text" className="form-control form-control-danger" readOnly={true} value={this.props.subject}/>
            </div>
        );
    }
}

export default Test;
