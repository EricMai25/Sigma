import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import {Link} from 'react-router-dom';

class Navi extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <Navbar expand="sm" bg="dark" variant="dark">
                <Navbar.Brand>Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Link to='/'>Home</Link>
                    <Link to='/Dash'>Dashboard</Link>
                    <Link to='/Login'>Login</Link>
                </Nav>
            </Navbar>
        )
    }
}

export default Navi;