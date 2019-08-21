import React from 'react'
import In from './In.jsx'
import { Container, Button } from 'react-bootstrap';

class Front extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                {this.props.logging ? <In log={this.props.log}/> : <h2>Welcome To Sigma Please Login</h2>}
            </div>
        )
    }
}

export default Front

