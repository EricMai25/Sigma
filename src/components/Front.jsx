import React from 'react'
import './Front.css'
import { Container, Button, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom'

class Front extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <Container>
                <Jumbotron>
                    <h1>Welcome To Sigma</h1>
                    <p>
                        Place for secure Contracts
                    </p>
                    <p>
                        {this.props.logging
                            ? <Link to='/Dash'>
                                <Button>To Dashboard</Button>
                            </Link>
                            : <Link to='/Login'>
                                <Button>Login</Button>
                            </Link>

                        }

                    </p>
                </Jumbotron>
            </Container>
        )
    }
}

export default Front

