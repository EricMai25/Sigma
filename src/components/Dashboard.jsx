import React from 'react'
import './Dash.css'
import { Button, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Contracts from './Contracts.jsx'

class Dash extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className='dash'>
                <Row>
                    <Col sm={2} className='user'>
                        <img src={this.props.log.Img} alt="Smiley face" height="100" width="100" />
                        <h2> {this.props.log.First + ' ' + this.props.log.Last}</h2>
                        <h6>Balance:</h6>
                        <p>{this.props.log.Balance}</p>
                        <Link to='/Form'>
                            <Button className='create' >New Contract</Button>
                        </Link>
                    </Col>
                    <Col className='cards'>
                        <Row className='items'>
                            <Col>
                                <h6>Sent Contracts</h6>
                                <div className='contCards'>
                                    {this.props.log.Sent.map(item => {
                                        console.log(item)
                                        return (<Contracts fri={item} who='sender' comp={this.props.comp} />)
                                    })}

                                </div>
                            </Col>

                        </Row>
                        <Row className='items'>
                            <Col>

                                <h6>Recieved Contracts</h6>
                                {this.props.log.Rec.map(item => {
                                    return (<Contracts fri={item} who='rec' comp={this.props.comp} />)
                                })}
                            </Col>
                        </Row>
                        <Row className='items'>
                            <Col>
                                <h6>Finished Contracts</h6>
                                {this.props.log.Finished.map(item => {
                                    return (<Contracts fri={item} who='Fin' comp={this.props.comp} />)
                                })}
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </div>
        )
    }
}

export default Dash

