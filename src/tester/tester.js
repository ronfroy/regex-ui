import React from 'react';
import Test from './test';

class Tester extends React.Component {

    static propTypes = {

    }

    render() {
        return (
            <div>
                <h2>Regex Tester</h2>

                { this.props.tests.map((test) => (
                    <Test match={test.match} subject={test.subject} key={test.subject} />
                ))}
            </div>
        );
    }
}

export default Tester;
