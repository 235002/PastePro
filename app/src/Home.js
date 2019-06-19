import React, {Component} from 'react';
import { Button, FormGroup, FormControl } from 'react-bootstrap';
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
            code: event.target.value
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
                });
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
                    <div className="Hash">
                  <span className="myLabel">Your unique hash</span><br/>
                    <FormGroup controlId="text" className="myForm">
                    <FormControl
                        readOnly
                        type="text"
                        placeholder="Hash"
                        value={this.state.hash}
                        onChange={this.handleChange}
                        className="myInput" />
                    </FormGroup>
                    </div>
                    <br/>
                    <div className="Code">
                   <span className="myLabel2">Place for Your Code</span><br/>
                    <textarea className="myForm" name="code" rows="30" cols="54" onChange={this.handleChange}> </textarea>
                  
                    </div>
                    <div className="Button">
                    <Button
                        block
                        type="submit"
                        disabled={!this.validateForm()}
                        onClick={this.handleClick}
                        >
                        Paste Code
                    </Button>
                    </div>
                </form>
            </div>
        );
    }
}

