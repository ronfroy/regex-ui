import React from 'react';

class Test extends React.Component {

    static propTypes = {
        identifier: React.PropTypes.number.isRequired,
        subject: React.PropTypes.string.isRequired,
        must_match: React.PropTypes.bool.isRequired,
        pass: React.PropTypes.bool.isRequired,
        onChangeSubject: React.PropTypes.func.isRequired,
        onChangeMatch: React.PropTypes.func.isRequired
    }

    render() {
        var divCss = this.props.pass ? 'form-group has-success' : 'form-group has-danger';
        var textCss = this.props.pass ? 'form-control form-control-success' : 'form-control form-control-danger';

        return (
            <div className={divCss}>
                <textarea className={textCss}
                          value={this.props.subject}
                          onChange={(e) => this.props.onChangeSubject(e.target.value)}
                />
                Must match: <input type="checkbox"
                       checked={this.props.must_match}
                       onChange={(e) => this.props.onChangeMatch(e.target.value)}
                />
            </div>
        );
    }
}

export default Test;
