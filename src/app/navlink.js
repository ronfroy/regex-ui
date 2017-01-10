import React from 'react';
import {Link} from 'react-router';

class NavLink extends React.Component {

    static propTypes = {
        to: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired
    };

    render() {
        return (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to={this.props.to} className="nav-link" activeClassName="active">
                        {this.props.name}
                    </Link>
                </li>
            </ul>
        );
    }
}

export default NavLink;
