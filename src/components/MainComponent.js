import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import Home from './HomeComponent';
import SidebarNav from './SidebarNavComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

function Main(props) {
    return (
            
        <Container fluid className="page-wrapper">
            <Row>

                <Col xs={12} md={2} id="sidebar-bg">
                    <SidebarNav/>
                </Col>

                <Col md={10} className="px-0">
                    <div className="main-wrapper">
                        

                        <Header/>
                        <Container className="content-wrapper bg-light">
                            <h2>Hello Main!</h2>
                            <Switch>
                                <Route path='/home' component={Home} />
                                <Redirect to='/home' />
                            </Switch>
                        </Container>
                        <Footer/>
                        
                    </div>
                </Col>

            </Row>
        </Container>
    );
}

export default Main;