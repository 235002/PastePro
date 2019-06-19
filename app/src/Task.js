import React, {Component} from 'react';
import { Button, FormGroup, FormControl } from 'react-bootstrap';

import axios from "axios";

export default class Task extends Component {
    constructor(props) {
        super(props)
        this.state = {
            code: ""
        }
    }

    componentDidMount(){
        console.log("props", this.props)
        axios.get('http://localhost:8080/api/paste/' + this.props.match.params.hash)
            .then(resp=>{
                // console.log(resp);
                console.log("resp", resp);
                this.setState({code: resp.data.code});
            });
    }

    render() {
        return (
            <div className={"Home"}>
                <form>
                    <FormGroup controlId="text" >
                        <textarea className="myForm" name="code" rows="30" cols="54" value={this.state.code} disabled/>
                    
                    </FormGroup>
                </form>
                <br/>
                    <Button
                        block
                        type="submit"
                        className="Button"
                    >
                        <a href="/">Powrot</a>
                    </Button>
            </div>
        );
    }
}

