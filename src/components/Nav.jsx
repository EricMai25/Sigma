import React from 'react'
import { Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Nav.css'

class Navi extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <Navbar expand="sm" bg="dark" variant="dark">
                <Navbar.Brand>Sigma</Navbar.Brand>
                <Nav className="mr-auto">
                    <Link to='/'>
                        <Nav.Link href='/'>Home</Nav.Link>
                    </Link>
                    <Link to='/Dash'>
                        <Nav.Link href='/Dash' >Dashboard</Nav.Link>
                    </Link>
                    <Link to='/Login'>
                        <Nav.Link href='/Login'>Login</Nav.Link>
                    </Link>
                </Nav>
            </Navbar>
        )
    }
}

export default Navi;