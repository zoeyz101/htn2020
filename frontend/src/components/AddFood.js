import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const AddFood = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="foodName">Name</Label>
          <Input type="name" name="name" id="foodName" placeholder="enter food name" />
      </FormGroup>
  
      <FormGroup>
        <Label for="category">Category</Label>
          <Input type="select" name="category" id="exampleSelect" placeholder="select a category">
            <option>Vegetables</option>
            <option>Fruit</option>
            <option>Dairy & Eggs</option>
            <option>Snacks</option>
            <option>Other</option>
          </Input>
      </FormGroup>

      <FormGroup>
        <Label for="date">Expiration Date</Label>
          <Input type="date" name="date" id="date" />
      </FormGroup>
    
      <FormGroup>
          <Button color="success">Submit</Button>
      </FormGroup>
    </Form>
  );
}

export default AddFood;
