import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import React, { PureComponent } from 'react'
import axios from 'axios';

export default class TeacherRegisterComponent extends PureComponent {
    constructor(props){
        super(props);
        this.state={
            username:"",
            email:"",
            password:""
        };

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(event){
        event.preventDefault();
        let code = this.state
        axios.post('http://localhost:3001/teacher/register', {
            code
        }).then(response => {
            console.log(response);
        }).catch(err => {
            console.log(err)
        })
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input type="username" name="username" id="username" placeholder="Kindly enter your Username" value={this.state.username} onChange={e => this.setState({username: e.target.value})}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="Kindly enter your Email" value={this.state.email} onChange={e => this.setState({email: e.target.value})}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" placeholder="Enter your password" value={this.state.password} onChange={e => this.setState({password: e.target.value})}/>
                    </FormGroup>
                    <Button type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}


