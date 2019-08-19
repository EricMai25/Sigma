import React from 'react'
import Form from './Form.jsx'
import Acc from './Account'
import Front from './Front.jsx'
import Login from './Login.jsx'
import Dash from './Dashboard.jsx'
import Navi from './Nav.jsx'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container, Button } from 'react-bootstrap';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Logged: false,
            LogedInAs: {},
            Account1: Acc.per1,
            Account2: Acc.per2
        }
    }
    login(event) {
        console.log(event)
        this.setState({
            LogedInAs: event,
            Logged: true
        })
    }
    render() {
        return (
            <div>
                <Router>
                    <Navi />
                    <Route
                        exact path="/"
                        render={props => {
                            return (
                                <Front
                                    log={this.state.LogedInAs} logging={this.state.Logged}
                                />
                            );
                        }}
                    />
                    <Route
                        path='/Login'
                        render={() => {
                            return (
                                <Login a1={this.state.Account1} a2={this.state.Account2} login={this.login.bind(this)} />
                            )
                        }}>
                    </Route>
                    <Route
                        path='/Dash'
                        render={() => {
                            return (
                                <Dash  log={this.state.LogedInAs} logging={this.state.Logged}/>
                            )
                        }}>
                    </Route>

                </Router>
                {/* <Front log={this.state.LogedInAs} logging={this.state.Logged} />
                <Login a1={this.state.Account1} a2={this.state.Account2} /> */}
            </div>
        )
    }
}

export default Home

