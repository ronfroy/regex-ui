import React from 'react';

class Loader extends React.Component {

    render() {
        return (
            <div>
                <h2>Regex Loader</h2>
                <button className="btn btn-secondary" onClick={this.props.loadUrlValidation}>Load email validation</button>
            </div>
        );
    }
}

export default Loader;
