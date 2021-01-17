import React from 'react';
import './pages.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function SignUp() {
    return(
        <div className="col-md-6 col-sm-10 mx-auto p-0 my-5">
        <div className="card p-3">
            <h1 className="text-center my-4">Sign Up</h1>
            <Form>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="Enter your email." />
              </FormGroup>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="exampleEmail" className="mr-sm-2">Username</Label>
                <Input type="username" name="email" id="exampleEmail" placeholder="Choose your username." />
              </FormGroup>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="examplePassword" className="mr-sm-2">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="Set a password." />
              </FormGroup>
              <Button color="secondary">Sign Up</Button>
            </Form>
        </div>
        </div>
    )
}
export default SignUp