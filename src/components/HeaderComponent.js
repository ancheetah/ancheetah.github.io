import React  from 'react';
import { Jumbotron, Row, Col } from 'reactstrap';

function Header() {

    return (
        <Jumbotron fluid  className="header mb-0">
            <Row>
                <Col md="7" className="mx-5">
                    <h1 className="display-3">Welcome</h1>
                    <p className="lead">Hi, I'm AJ! An aspiring Front End Web Developer with a
                        background in astrophysics and art. I like to make functional things
                        that look pretty ✨</p>
                    <p>This site is still under construction and created with React.js</p>
                </Col>
            </Row>
        </Jumbotron>
    );
}

export default Header;