import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <Container>
                <h2>Login As</h2>
                <Row>
                    <Col>
                        <img src={this.props.a1.Img} alt="Smiley face" height="300" width="300" />
                        <Button onClick={
                            e => { this.props.login(this.props.a1) }
                        }>
                            <Link to='/' >{this.props.a1.First + ' ' + this.props.a1.Last}</Link>
                        </Button>
                    </Col>
                    <Col>
                        <img src={this.props.a2.Img} alt="Smiley face" height="300" width="300" />
                        <Button onClick={
                            e => { this.props.login(this.props.a2) }
                        }>
                            <Link to='/' >{this.props.a2.First + ' ' + this.props.a2.Last}</Link>
                        </Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Login