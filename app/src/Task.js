import React, {Component} from 'react';
import { Button, FormGroup, FormControl } from 'react-bootstrap';

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
                        <textarea name="code" rows="30" cols="54" value={this.state.data.code} />
                        {/*<FormControl*/}
                            {/*readOnly*/}
                            {/*type="text"*/}
                            {/*placeholder="Your Code"*/}
                        {/*/>*/}
                    </FormGroup>
                </form>
                <br/>
                <div className="Link">
                    <Button
                        block
                        type="submit"
                    >
                        <a href="/">Powrot</a>
                    </Button>
                </div>
            </div>
        );
    }
}

