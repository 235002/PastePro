import React, {Component} from 'react';
import {FormGroup, FormControl} from 'react-bootstrap';

export default class Task extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:8080/api/paste/' + this.props.match.params.hash)
            .then(response => response.json())
            .then(data=>{
                this.setState({data});
            });
    }

    render() {
        return (
            <div className={"Task"}>
                <form>
                    <FormGroup controlId="text">
                        <FormControl
                            readOnly
                            type="text"
                            placeholder="Your Code"
                            value={this.state.data.code} />
                    </FormGroup>
                </form>
            </div>
        );
    }
}

