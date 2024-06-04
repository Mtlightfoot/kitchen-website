import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LinkContainer } from 'react-router-bootstrap'
import '../main.css';

const styles = {
    container: {
        paddingTop: "20px"
    },
    column: {
        border: "1px solid red"
    },
    img: {
        width: "100%",
    },
    row: {
        height: "50%"
    },
    noBorder: {
        border: "none",
        color: "#45523E",
        backgroundColor: "transparent"
    },
    border: {
        border: "1px solid black"
    }
}

function OurWork() {



    return (
        <div>
            <Container style={styles.container} className='text-center'>
                <div className="ourwork-banner"></div>

                <Card style={styles.noBorder} className="text-center m-4">
                    <Card.Body>
                        <Card.Title><h3>Our Work</h3></Card.Title>
                        <Card.Text>
                            Here you will find pictures and examples of previous work completed by us here at ForestWood Designs!
                        </Card.Text>
                        <LinkContainer to='/ContactMe'>
                            <Button id='contactMeButton' variant="primary">Click here to Contact Us</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>

                <Container>
                    <Row>

                        <Col md={6} className='mb-5'>
                            <Card id='card'>

                                <Carousel className='our-work-carousel'>
                                    <Carousel.Item>
                                        <img className='d-block w-100' src='bedroom-pic-2.jpg'></img>
                                        <Carousel.Caption>
                                            <h3>First slide label</h3>
                                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className='d-block w-100' src='bedroom-pic-2.jpg'></img>        <Carousel.Caption>
                                            <h3>Second slide label</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className='d-block w-100' src='bedroom-pic-2.jpg'></img>        <Carousel.Caption>
                                            <h3>Third slide label</h3>
                                            <p>
                                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                            </p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>

                                <Card.Body>
                                    <Card.Title>Name of kitchen</Card.Title>
                                    <Card.Text>
                                        <p>A bit of blurb</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={6} className='mb-5'>
                            <Card id='card'>

                                <Carousel className='our-work-carousel'>
                                    <Carousel.Item>
                                        <img className='d-block w-100' src='bedroom-pic-2.jpg'></img>
                                        <Carousel.Caption>
                                            <h3>First slide label</h3>
                                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className='d-block w-100' src='bedroom-pic-2.jpg'></img>        <Carousel.Caption>
                                            <h3>Second slide label</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className='d-block w-100' src='bedroom-pic-2.jpg'></img>        <Carousel.Caption>
                                            <h3>Third slide label</h3>
                                            <p>
                                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                            </p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>

                                <Card.Body>
                                    <Card.Title>Name of kitchen</Card.Title>
                                    <Card.Text>
                                        <p>A bit of blurb</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>

                        <Col md={6} className='mb-5'>
                            <Card id='card'>

                                <Carousel className='our-work-carousel'>
                                    <Carousel.Item>
                                        <img className='d-block w-100' src='bedroom-pic-2.jpg'></img>
                                        <Carousel.Caption>
                                            <h3>First slide label</h3>
                                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className='d-block w-100' src='bedroom-pic-2.jpg'></img>        <Carousel.Caption>
                                            <h3>Second slide label</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className='d-block w-100' src='bedroom-pic-2.jpg'></img>        <Carousel.Caption>
                                            <h3>Third slide label</h3>
                                            <p>
                                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                            </p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>

                                <Card.Body>
                                    <Card.Title>Name of kitchen</Card.Title>
                                    <Card.Text>
                                        <p>A bit of blurb</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={6} className='mb-5'>
                            <Card id='card'>

                                <Carousel className='our-work-carousel'>
                                    <Carousel.Item>
                                        <img className='d-block w-100' src='bedroom-pic-2.jpg'></img>
                                        <Carousel.Caption>
                                            <h3>First slide label</h3>
                                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className='d-block w-100' src='bedroom-pic-2.jpg'></img>        <Carousel.Caption>
                                            <h3>Second slide label</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className='d-block w-100' src='bedroom-pic-2.jpg'></img>        <Carousel.Caption>
                                            <h3>Third slide label</h3>
                                            <p>
                                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                            </p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>

                                <Card.Body>
                                    <Card.Title>Name of kitchen</Card.Title>
                                    <Card.Text>
                                        <p>A bit of blurb</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            </Container>
        </div>
    )
}

export default OurWork;