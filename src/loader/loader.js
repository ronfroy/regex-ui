import React from 'react'

class Loader extends React.Component {

    static propTypes = {
        onLoadUrlValidation: React.PropTypes.func.isRequired,
        onLoadEmailValidation: React.PropTypes.func.isRequired,
    }

    render() {
        return (
            <div>
                <h2>Regex Loader</h2>
                <button className="btn btn-primary mb-2 mr-sm-2 mb-sm-0" onClick={this.props.onLoadUrlValidation}>
                    Load URL validation
                </button>
                <button className="btn btn-primary mb-2 mr-sm-2 mb-sm-0" onClick={this.props.onLoadEmailValidation}>
                    Load Email validation
                </button>
            </div>
        )
    }
}

export default Loader
