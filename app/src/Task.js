import React, {Component} from 'react';
import {FormGroup, FormControl} from 'react-bootstrap';

export default class Task extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hash: this.props.hash,
            code: this.props.code
        }
    }

    componentDidMount(){
        fetch('http://localhost:8080/api/')
    }

    render() {
        return (
            <div className={"Task"}>
                <form onSubmit={this.handleSubmit}>
                    TASK
                    <FormGroup controlId="text">
                        <FormControl
                            readOnly
                            type="text"
                            placeholder="Your Code"
                            value={this.state.code} />
                    </FormGroup>
                </form>
            </div>
        );
    }
}

