import React from 'react';
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Card, CardImg, CardBody,
        CardTitle, CardSubtitle, CardLink, Jumbotron } from 'reactstrap';

function Home(props) {
    const arrow = <FontAwesomeIcon icon={faExternalLinkAlt}/>;
    const centerCol = "mx-auto d-flex justify-content-center";

    const tools = props.tools.map( tool => {
        return (
            <Col key={tool.id} className="my-auto d-flex justify-content-center">
                <img src={"/img/tools/" + tool.logo} alt={tool.name} 
                    width="auto" height="50" className="my-2"/>
            </Col>
        );
    });

    const badges = props.badges.map( badge => {
        return (
            <Col key={badge.id} className={centerCol}>
                <figure className="figure">
                    <img src={"/img/certs/" + badge.img} alt={badge.name}
                        width="150" height="150" className="figure-img img-fluid"/>
                    <figcaption class="figure-caption text-center">{badge.name}</figcaption>
                </figure>
            </Col>
        );
    });

    const projects = props.projects.map( project => {
        return (
            <Col key={project.id} className="my-3">
                <Card className="h-100">
                    <Row>
                        <Col xs={12} sm={4} md={12}>
                            <a href={project.demo} target="_blank" rel="noreferrer">
                                <CardImg top width="100%" src={ '/img/projects/' + project.img }
                                    alt={project.name} />
                            </a>
                        </Col>
                        <Col>
                            <CardBody>
                                <CardTitle>{project.name}</CardTitle>
                                <CardSubtitle className="text-muted mb-3">{project.desc}</CardSubtitle>
                                <CardLink href={project.demo}>Demo {arrow}</CardLink>
                                <CardLink href={'https://www.github.com/ancheetah/' + project.repo}>
                                    Repository {arrow}</CardLink>
                            </CardBody>
                        </Col>
                    </Row>
                </Card>
            </Col>
        )
    })

    return (
        <React.Fragment>
        
            <h1 className="py-3 text-center">Toolbox</h1>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 bg-white m-3 py-2">
                {tools}
            </Row>

            <hr className="my-5"/>

            <h1 className="py-3 text-center">Projects</h1>
            <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 m-3 mx-xl-5">
                {projects}
            </Row>

            <hr class="my-5" />

            <h1 id="credentials" className="text-center py-3">Credentials</h1>

            <Jumbotron className="bg-primary text-light py-4">
                <h5 className="text-center">Education</h5>
                <ul class="list-unstyled">
                    <li><strong>B.S. Astrophysics</strong>, 2013, <em>UCLA</em></li>
                    <li><strong>M.S. Physics</strong>, 2016, <em>The Catholic University of America</em></li>
                    <li><strong>Javascript Algorithms and Data Structures Certification</strong>, 2020, <em>freeCodeCamp</em></li>
                    <li><strong>Front End Web Development Certification with Honors</strong>, 2021, <em>Nucamp</em></li>
                    <li><strong>Full Stack Web Development Certification</strong>, 2021, <em>Nucamp</em></li>
                </ul>
            </Jumbotron>

            <Row className="row-cols-2 row-cols-lg-4 m-5">
                {badges}
            </Row>

            <Row>
                <Col md={6}>
                    <img src="/img/certs/FrontEndCert.jpg" 
                        alt="Nucamp Front End Certificate with Honors" className="img-fluid"/>
                </Col>
                <Col md={6}>
                    <img src="/img/certs/BackendCert.jpg" 
                        alt="Nucamp Backend Certificate" className="img-fluid"/>
                </Col>
            </Row>
            <Row className="my-4">
                <Col md={6} className={centerCol}>
                    <a href="https://www.freecodecamp.org/certification/ancheetah/javascript-algorithms-and-data-structures"
                        target="_blank" rel="noreferrer">
                        <img src="/img/certs/freeCodeCamp_Cert.png"
                            alt="freeCodeCamp Javascript Certificate" className="img-fluid"/>
                    </a>
                </Col>
            </Row>
            
        </React.Fragment>
    );
}

export default Home;