import React from 'react'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {userLogout} from "../actions/auth.actions";
import Link from "react-router-dom/es/Link";

class TopNav extends React.Component {
    state = {
        isOpen: false
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {

        const navItems = () => {
            if (Object.keys(this.props.user).length) {
                return (
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/login" onClick={this.props.userLogout}>Logout</NavLink>
                        </NavItem>
                    </Nav>
                )

            } else {
                return (
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/login">Login</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/Signup">Signup</NavLink>
                        </NavItem>
                    </Nav>
                )
            }
        };

        return (
            <div>
                <Navbar color="primary" dark expand="md">
                    <NavbarBrand href="/">ProfileHub</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        {navItems()}
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.auth.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userLogout: bindActionCreators(userLogout, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopNav)