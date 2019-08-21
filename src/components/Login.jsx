import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Login.css'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <Container>
                <h2>Login as</h2>
                <Row>
                    <Col>
                        <img src={this.props.a1.Img} alt="Smiley face" height="150" width="150" />
                        <Link to='/' >
                            <Button onClick={
                                e => { this.props.login(this.props.a1.id) }
                            }>
                                {this.props.a1.First + ' ' + this.props.a1.Last}
                            </Button>
                        </Link>
                    </Col>
                    <Col>
                        <img src={this.props.a2.Img} alt="Smiley face" height="150" width="150" />
                        <Link to='/'>
                            <Button onClick={
                                e => { this.props.login(this.props.a2.id) }
                            }> {this.props.a2.First + ' ' + this.props.a2.Last}
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Login