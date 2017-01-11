import React from 'react';
import Test from './test-container';

class Tester extends React.Component {

    static propTypes = {
        tests: React.PropTypes.array.isRequired,
        onAddTest: React.PropTypes.func.isRequired,
        onReset: React.PropTypes.func.isRequired
    }

    render() {
        return (
            <div>
                <h2>Regex Tester</h2>

                { this.props.tests.map((test) => (
                    <Test key={test.identifier}
                          identifier={test.identifier}
                          subject={test.subject}
                          must_match={test.must_match}
                          pass={test.pass}
                    />
                ))}

                <button
                    className="btn btn-primary mb-2 mr-sm-2 mb-sm-0"
                    onClick={() => this.props.onAddTest()}
                >
                    <i className="fa fa-plus" aria-hidden="true"></i> Add test
                </button>

                { this.props.tests.length ? (
                    <button
                        className="btn btn-danger mb-2 mr-sm-2 mb-sm-0"
                        onClick={ this.props.onReset }
                    >
                        <i className="fa fa-trash" aria-hidden="true"></i> Reset
                    </button>) : ''
                }
            </div>
        );
    }
}

export default Tester;
