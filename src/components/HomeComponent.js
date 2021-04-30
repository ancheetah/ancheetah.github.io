import React from 'react';
// import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Card, CardImg, CardBody,
        CardTitle, CardSubtitle, CardLink } from 'reactstrap';

function Home(props) {
    // const arrow = <FontAwesomeIcon icon={faLongArrowAltRight}/>;
    const tools = props.tools.map( tool => {
        return (
            <Col key={tool.id} className="my-auto d-flex justify-content-center">
                <img src={"../../img/tools/" + tool.logo} alt={tool.name} 
                    width="auto" height="50" className="my-2"/>
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
                                <CardLink href={project.demo}>Project Demo</CardLink>
                                <CardLink href={"https://www.github.com/ancheetah/" + project.repo}>
                                    Repository</CardLink>
                            </CardBody>
                        </Col>
                    </Row>
                </Card>
            </Col>
        )
    })

    return (
        <div>
        
            <h1 className="py-3 text-center">Toolbox</h1>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 bg-white m-3 py-2">
                {tools}
            </Row>

            <hr className="my-5"/>

            <h1 className="py-3 text-center">Projects</h1>
            <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 m-3">
                {projects}
            </Row>

            <hr class="my-5" />

            <div class="row">
                <div class="col-10 bg-primary text-white py-5 mx-auto rounded-lg">
                    <h3 class="text-center">Nucamp Full Stack Web + Mobile Development Bootcamp</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-5 d-flex justify-content-center mx-auto my-4">
                    {/* <!-- <h4>Bootstrap</h4> --> */}
                    <figure class="figure">
                        <img src="img/Bootstrap_Course_Completion.png" alt="Nucamp Bootstrap Badge"
                            class="figure-img img-fluid border-0" width="150" height="150" />
                        <figcaption class="figure-caption text-center">Bootstrap <br/></figcaption>
                    </figure>
                </div>
                <div class="col-5 d-flex justify-content-center mx-auto my-4">
                    {/* <!-- <h4>React Native</h4> --> */}
                    <figure class="figure">
                        <img src="img/React_Native_Course_Completion.png" alt="Nucamp React Native Badge"
                            class="figure-img img-fluid border-0" width="150" height="150" />
                        <figcaption class="figure-caption text-center">React Native</figcaption>
                    </figure>
                </div>
                <div class="col-5 d-flex justify-content-center mx-auto my-4">
                    {/* <!-- <h4>React</h4> --> */}
                    <figure class="figure">
                        <img src="img/React_Course_Completion.png" alt="Nucamp React Badge"
                            class="figure-img img-fluid border-0" width="150" height="150" />
                        <figcaption class="figure-caption text-center">React</figcaption>
                    </figure>
                </div>
                <div class="col-5 d-flex justify-content-center mx-auto my-4">
                    {/* <!-- <h4>Backend</h4> --> */}
                    <figure class="figure">
                        <img src="img/Node_Express_MongoDB_Course_Completion.png" alt="Nucamp React Badge"
                            class="figure-img img-fluid border-0" width="150" height="150" />
                        <figcaption class="figure-caption text-center">Node, Express, Mongo DB</figcaption>
                    </figure>
                </div>
            </div>
        </div>
    );
}

export default Home;