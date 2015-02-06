var React = require('react');
var Bootstrap = require('react-bootstrap');

var Jumbotron = Bootstrap.Jumbotron;
var Button = Bootstrap.Button;

var Navbar = Bootstrap.Navbar;
var Nav = Bootstrap.Nav;
var NavItem = Bootstrap.NavItem;
var DropdownButton = Bootstrap.DropdownButton;
var MenuItem = Bootstrap.MenuItem;


var Main = React.createClass({

    render: function () {
        return (
            <div>
                <Navbar className="navbar navbar-inverse navbar-fixed-top">
                    <a className="navbar-brand" href="#">Project name</a>
                    <Nav className="nav navbar-nav">
                        <NavItem className="active" eventKey={1} href="#home">Home</NavItem>
                        <NavItem eventKey={2} href="#about">About</NavItem>
                        <NavItem eventKey={2} href="#about">Contact</NavItem>
                        <DropdownButton eventKey={3} title="Dropdown">
                            <MenuItem eventKey="1">Action</MenuItem>
                            <MenuItem eventKey="2">Another action</MenuItem>
                            <MenuItem eventKey="3">Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey="4">Separated link</MenuItem>
                        </DropdownButton>
                    </Nav>
                </Navbar>

                <div className="container">
                    <div className="starter-template">
                        <h1>Bootstrap starter template</h1>
                        <p className="lead">Use this document as a way to quickly start any new project.
                            <br /> All you get is this text and a mostly barebones HTML document.</p>
                        </div>
                    </div>
                </div>
            );
            }

            });

            module.exports = Main;