import React from 'react'
import Navi from './Nav.jsx'
import Form from './Form.jsx'
import { Container ,Button} from 'react-bootstrap';

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        return(
            <div>
                <Navi/>
                <h2>Welcome Eric</h2>
                <Button>Create Contract</Button>
                <Form/>
            </div>
        )
    }
}

export default Home;