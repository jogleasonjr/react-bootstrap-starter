var React = require('react');
var Bootstrap = require('react-bootstrap');

var Navbar = Bootstrap.Navbar;
var Nav = Bootstrap.Nav;
var NavItem = Bootstrap.NavItem;
var NavDropdown = Bootstrap.NavDropdown;
var MenuItem = Bootstrap.MenuItem;

var Navigation = React.createClass({

    render: function() {
        return (
            <Navbar className="navbar navbar-inverse navbar-fixed-top">
                <a className="navbar-brand" href="#">{this.props.projectName}</a>
                <Nav className="nav navbar-nav">
                    <NavItem className="active" href="#home">Home</NavItem>
                    <NavItem href="#about">About</NavItem>
                    <NavItem href="#about">Contact</NavItem>
                    <NavDropdown id="dropdown" title="Dropdown">
                        <MenuItem>Action</MenuItem>
                        <MenuItem>Another action</MenuItem>
                        <MenuItem>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem>Separated link</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar>
        );
    }
});

module.exports = Navigation;
