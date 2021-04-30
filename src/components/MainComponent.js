import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import Home from './HomeComponent';
import SidebarNav from './SidebarNavComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { TOOLS } from '../shared/tools';
import { PROJECTS } from '../shared/projects';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tools: TOOLS,
            projects: PROJECTS
        }
    }

    render() {
        return (     
            <Container fluid className="page-wrapper">
                <Row>

                    <Col xs={12} md={3} lg={2} id="sidebar-container">
                        <SidebarNav/>
                    </Col>

                    <Col className="px-0">
                        <div className="main-wrapper">
                            <Header/>
                            <Container fluid className="content-wrapper bg-light py-5">
                                <Switch>
                                    <Route path='/home' render={() => 
                                        <Home tools={this.state.tools} projects={this.state.projects} /> } />
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
}

export default Main;