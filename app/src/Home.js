import React, {Component} from 'react';
import {Button, FormGroup, FormControl} from 'react-bootstrap';
import './App.css'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hash: this.generateHash(),
            code: props.code
        }
        this.validateForm = this.validateForm.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    validateForm() {
        return this.state.code !== "";
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = (event, {history}) => {
        if (this.state.validateForm() !== false) {
            history.push(`/task/${this.state.hash}`);
        }
    }

    generateHash() {
        var length = 16;
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    }

    componentDidMount(){
        fetch('http://localhost:8080/api/paste')
            .then(response => response.json())
            .then(data=>{
                console.log(data);
                this.setState({data});
            })
    }

    render() {
        return (
            <div className="Home">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="text">
                    <FormControl
                        autoFocus
                        type="text"
                        placeholder="Your Code"
                        value={this.state.code}
                        onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup controlId="text">
                    <FormControl
                        readOnly
                        type="text"
                        placeholder="Hash"
                        value={this.state.hash}
                        onChange={this.handleChange} />
                    </FormGroup>
                    <br/>
                    <Button
                        block
                        type="submit"
                        bsSize="large"
                        disabled={!this.validateForm()}
                        onClick={this.handleSubmit}
                        >
                        Paste Code
                    </Button>
                </form>
                <div className={"ABC"}>
                    ${this.state.code}
                    ${this.state.hash}
                </div>
            </div>
        );
    }
}

