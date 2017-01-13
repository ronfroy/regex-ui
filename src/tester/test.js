import React from 'react';

class Test extends React.Component {

    static propTypes = {
        identifier: React.PropTypes.number.isRequired,
        subject: React.PropTypes.string.isRequired,
        must_match: React.PropTypes.bool.isRequired,
        pass: React.PropTypes.bool,
        onRemove: React.PropTypes.func.isRequired,
        onChangeSubject: React.PropTypes.func.isRequired,
        onChangeMatch: React.PropTypes.func.isRequired
    }

    render() {
        return (
            <tr scope="row" className={this.props.pass ? '' : 'table-danger'}>
                <td>
                    <textarea className="form-control"
                              value={this.props.subject}
                              onChange={(e) => this.props.onChangeSubject(e.target.value)}
                    />
                    <label>
                        <input type="checkbox"
                           checked={!this.props.must_match}
                           onChange={(e) => this.props.onChangeMatch(e.target.value)}
                    /> must not match</label>
                </td>
                <td>
                    <textarea className="form-control"
                              disabled={true}
                    />
                </td>
                <td>
                    <button
                        className="btn btn-danger"
                        onClick={this.props.onRemove }
                    >
                        <i className="fa fa-trash" aria-hidden="true"></i> Remove
                    </button>
                </td>
            </tr>
        );
    }
}

export default Test;
