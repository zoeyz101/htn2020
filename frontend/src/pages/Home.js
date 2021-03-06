import React from 'react';
import './pages.css';
import { Button, Container, Row, Col, Nav } from 'reactstrap';
import logo from '../logo.svg';
import NavBar from '../components/HomeNavBar'

function Home(){
    return (
        <>
        <NavBar/>
        <div class="container">
         <Container className="my-5 center">
        <Row xs="2">
        <Col class="logo-center">
            <img src={logo} alt="logo" />
        </Col>
        <Col>
            <h1 className="text-uppercase">Nutribuddy</h1>
            <h4>Making food shouldn't be so hard</h4>  
            <Button color="secondary" href="/signup">Sign Up</Button>
        </Col>
      </Row>
      </Container>
      </div>
      </>
    )
}

export default Home;