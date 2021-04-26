import React  from 'react';
import { Jumbotron, Row, Col } from 'reactstrap';

function Header() {

    return (
        <Jumbotron fluid  className="header">
            <Row>
                <Col md="7" className="mx-5">
                    <h1 className="display-3">Welcome</h1>
                    <p className="lead">Hi, I'm AJ! An aspiring Front End Web Developer with a
                        background in astrophysics and art. I like to make functional things
                        that look pretty ✨</p>
                    <p>This page is currently under construction and is being created with React.js</p>
                </Col>
            </Row>
        </Jumbotron>
    );
}

export default Header;