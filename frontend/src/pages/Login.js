import React from 'react';
import './pages.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function Login() {
    return(
        <div className="col-md-6 col-sm-10 mx-auto p-0 my-5">
        <div className="card p-3">
            <h1 className="text-center my-4">Log In</h1>
            <Form>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="exampleEmail" className="mr-sm-2">Username</Label>
                <Input type="username" name="email" id="exampleEmail" placeholder="Username" />
              </FormGroup>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="examplePassword" className="mr-sm-2">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="Password" />
              </FormGroup>
              <Button color="primary">Log In</Button>
            </Form>
        </div>
        </div>
    )
}
export default Login