import React, {Component} from 'react';
import {Button, FormGroup, FormControl} from 'react-bootstrap';
import './App.css'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hash: this.generateHash(),
            code: ""
        }
        this.validateForm = this.validateForm.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    validateForm() {
        return this.state.code !== "";
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleClick() {
            fetch('http://localhost:8080/api/paste',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(this.state)
                }).then(response => response.json());
            this.props.history.push('/task/'+this.state.hash);
    }

    generateHash() {
        var length = 16;
        var result           = "";
        var characters       = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    }

    render() {
        return (
            <div className="Home">
                <form>
                    <FormGroup controlId="code">
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
                        disabled={!this.validateForm()}
                        onClick={this.handleClick}
                        >
                        Paste Code
                    </Button>
                </form>
            </div>
        );
    }
}

