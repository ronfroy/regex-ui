import React from 'react';
import NavLink from './navlink';

class NavBar extends React.Component {

    static propTypes = {
        title: React.PropTypes.string.isRequired,
        regex: React.PropTypes.string.isRequired,
        navigation: React.PropTypes.array.isRequired
    };

    render() {
        return (
            <nav className="navbar navbar-toggleable-md  navbar-inverse bg-inverse">

                <button className="navbar-toggler navbar-toggler-right"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <h1 className="navbar-brand">{this.props.title}</h1>

                <div id="navbarNavDropdown" className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        { this.props.navigation.map((link) => (
                            <NavLink to={link.route} key={link.name} name={link.name} />
                        ))}
                    </ul>
                </div>

                <input className="form-control"
                       type="text"
                       readOnly={true}
                       value={this.props.regex}
                />
            </nav>
        );
    }
}

export default NavBar;
