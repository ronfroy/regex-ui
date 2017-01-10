import React from 'react';
import NavBar from './navbar';

class Layout extends React.Component {

    static propTypes = {
        regex: React.PropTypes.string.isRequired,
        navigation: React.PropTypes.array.isRequired,
        children: React.PropTypes.object
    };

    render() {
        return (
            <div className="container-fluid">
                <NavBar
                    title="Regex UI"
                    regex={this.props.regex}
                    navigation={this.props.navigation}
                />
                <br/>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Layout;
