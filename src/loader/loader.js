import React from 'react';

class Loader extends React.Component {

    render() {
        return (
            <div>
               <ul>
                   <li> Email validation : <button onClick={this.props.loadEmailValidation}>Load</button></li>
               </ul>
            </div>
        );
    }
}

export default Loader;
