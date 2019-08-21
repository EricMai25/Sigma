import React from 'react'
import Form from './Form.jsx'
import Acc from './Account'
import Front from './Front.jsx'
import Login from './Login.jsx'
import Dash from './Dashboard.jsx'
import Navi from './Nav.jsx'
import { BrowserRouter as Router, Route } from 'react-router-dom'

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
        this.setState({
            LogedInAs: this.state['Account'+event],
            Logged: true
        })
    }
    request(cont, sending, recieve){
        let a1 = this.state[sending]
        let a2 = this.state[recieve]
        cont.iSend= a1.Sent.length +1
        cont.iRec= a2.Rec.length + 1
        a1.Sent.push(cont)
        a2.Rec.push(cont)
        if(a1.id === 1){
            this.setState({
                Account1 : a1,
                Account2 : a2,
            })
        }else {
            this.setState({
                Account1 : a2,
                Account2 : a1,
            })
        }

    }
    complete(iS, iR , con){
        let a1 = this.state['Account'+con.Sid]
        let a2 = this.state['Account'+con.Recipient]
        a1.Sent.splice(iS-1, 1)
        a2.Rec.splice(iR-1,1)
        a1.Balance= Number(a1.Balance) - Number(con.Amount)
        a2.Balance= Number(a2.Balance) + Number(con.Amount)
        a1.Finished.push(con)
        a2.Finished.push(con)
        if(a1.id === 1){
            this.setState({
                Account1 : a1,
                Account2 : a2,
            })
        }else {
            this.setState({
                Account1 : a2,
                Account2 : a1,
            })
        }
    }
    render() {
        return (
            <div>
                <Router>
                    <Navi/>
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
                        path='/Form'
                        render={() => {
                            return (
                                <Form  req={this.request.bind(this)} log={this.state.LogedInAs} login={this.login.bind(this)} />
                            )
                        }}>
                    </Route>
                    <Route
                        path='/Dash'
                        render={() => {
                            return (
                                this.state.Logged ?
                                    <Dash log={this.state.LogedInAs} logging={this.state.Logged} comp={this.complete.bind(this)} />
                                    : <Login a1={this.state.Account1} a2={this.state.Account2} login={this.login.bind(this)} />
                            )
                        }}>
                    </Route>

                </Router>
            </div>
        )
    }
}

export default Home

