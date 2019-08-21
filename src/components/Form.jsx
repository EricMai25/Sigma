import React from 'react'
import { Form, Button, Col, Container } from 'react-bootstrap'
import './Form.css'
import { Link} from 'react-router-dom';

class Contract extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Cname: '',
            name: this.props.log.First + ' ' + this.props.log.Last,
            Sid: this.props.log.id,
            Recipient: '',
            Rname: '',
            Detail: '',
            Amount: 0,
            Date: '',
            iSend: 0,
            iRec: 0,
            sender: false,
            rec: false,
            Agree: false,
            good: false
        }
    }

    pageChange() {
        if (!this.state.Cname || !this.state.Recipient || !this.state.Detail || !this.state.Amount || !this.state.Agree) {
            return true
        }
        return false
    }

    render() {
        return (
            <Container className='formbox'>
                <Form className='ConForm'>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Contract Name</Form.Label>
                            <Form.Control onChange={e => {
                                this.setState({ Cname: e.target.value })
                            }}
                                type="Name" placeholder='Name of contract here' />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control onChange={e => {
                                this.setState({ name: e.target.value })
                            }}
                                type="Name" value={this.state.name} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridRecip">
                            <Form.Label>Recipient</Form.Label>
                            <Form.Control onChange={e => {
                                let friend
                                if (this.props.log.id === 1) {
                                    friend = 2
                                } else {
                                    friend = 1
                                }
                                this.setState({
                                    Recipient: friend,
                                    Rname: e.target.value
                                })
                            }} as='select'>
                                <option>Choose...</option>
                                {this.props.log.Friends.map(item => {
                                    return (<option>{item.First + ' ' + item.Last}</option>)
                                })}
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridDescription">
                        <Form.Label>Contract Details</Form.Label>
                        <Form.Control onChange={e => {
                            this.setState({ Detail: e.target.value })
                        }} as="textarea" rows="10" />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Contract Amount</Form.Label>
                            <Form.Control type='number' onChange={e => {
                                this.setState({ Amount: Number(e.target.value) })
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
                    {this.pageChange()
                        ? <Button onClick={
                            e => {
                                if (!this.state.Cname || !this.state.Recipient || !this.state.Detail || !this.state.Amount || !this.state.Agree) {
                                    alert('Please fill in all entries')
                                } else {
                                    this.props.req(this.state, 'Account' + this.state.Sid, 'Account' + this.state.Recipient)
                                    this.pageChange()
                                }
                            }
                        }
                            variant="primary" >
                            Request
                    </Button>
                        : <Link to='/Dash'>
                            <Button onClick={
                                e => {
                                    if (!this.state.Cname || !this.state.Recipient || !this.state.Detail || !this.state.Amount || !this.state.Agree) {
                                        alert('Please fill in all entries')
                                    } else {
                                        this.props.req(this.state, 'Account' + this.state.Sid, 'Account' + this.state.Recipient)
                                        this.pageChange()
                                    }
                                }
                            }
                                variant="primary" >
                                Request
                            </Button>
                        </Link>}

                </Form>
            </Container>

        )
    }
}


export default Contract