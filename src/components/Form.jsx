import React from 'react'
import { Form, Button, Grid, Col, Container } from 'react-bootstrap'

class Contract extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            Recipient: '',
            Detail: '',
            Amount: '',
            Date: '',
            Agree: false,
        }
    }

    render() {
        return (
            <Container>

                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control onChange={e => {
                                this.setState({ name: e.target.value })
                            }}
                                type="Name" placeholder="Enter your name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridRecip">
                            <Form.Label>Recipient</Form.Label>
                            <Form.Control onChange={e => {
                                this.setState({ Recipient: e.target.value })
                            }} as='select'>
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridDescription">
                        <Form.Label>ConStract Details</Form.Label>
                        <Form.Control onChange={e => {
                            this.setState({ Detail: e.target.value })
                        }} as="textarea" rows="10" />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Contract Amount</Form.Label>
                            <Form.Control onChange={e => {
                                this.setState({ Amount: e.target.value })
                            }} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Date Finished</Form.Label>
                            <Form.Control onChange={e => {
                                this.setState({ Date: e.target.value })
                            }}
                                placeholder={new Date().toJSON().slice(0, 10).replace(/-/g, '/')} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group id="formGridCheckbox">
                        <Form.Check onChange={e => {
                            let yes
                            if (!this.state.Agree) {
                                yes = true
                            } else {
                                yes = false
                            }
                            this.setState({ Agree: yes })
                        }}
                            type="checkbox" label="I agree to the terms provided" />
                    </Form.Group>
                    <Button onClick={
                        e => {
                            console.log(this.state)
                        }
                    }
                        variant="primary" >
                        Request
                </Button>
                </Form>
            </Container>

        )
    }
}


export default Contract