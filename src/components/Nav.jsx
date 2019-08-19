import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

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
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link>Dashboard</Nav.Link>
                    <Nav.Link>Account</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default Navi;