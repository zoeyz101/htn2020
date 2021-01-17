import React from 'react';
import './pages.css';
import { Container, Row, Col } from 'reactstrap';
import logo from '../logo.svg';

function Home(){
    return (
        <div class="container">
         <Container className="my-5 center">
        <Row xs="2">
        <Col class="logo-center">
            <img src={logo} alt="logo" />
        </Col>
        <Col>
            <h1 className="text-uppercase">Insert Name Here</h1>
            <h4>Insert Slogan</h4>  
        </Col>
      </Row>
      </Container>
      </div>
    )
}

export default Home;