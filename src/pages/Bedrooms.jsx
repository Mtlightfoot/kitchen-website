import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
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
        border: "none"
    },
    border: {
        border: "1px solid black"
    }
}

function Bedrooms() {



    return (
        <div>
            <Container style={styles.container} className='text-center'>
                <div className="bedroom-banner"></div>

                <Card style={styles.noBorder} className="text-center m-4">
                    <Card.Body>
                        <Card.Title><h3>Bedrooms</h3></Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed nostrum fugit vel, rerum iusto pariatur sit esse voluptates laudantium ex possimus odit itaque. Fugit magni veniam exercitationem reprehenderit dolorum rem.
                        </Card.Text>
                        <LinkContainer to='/OurWork'>
                            <Button id='contactMeButton' variant="primary">View our work in the Gallery</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>

                <Container>
                    <Row className='mb-5'>
                        <Col md={4}>
                            <Card className='mb-3'>
                                <Card.Img className='.card-img-top' variant="top" src="../bedroom-pic-1.jpg" />
                                <Card.Body>
                                    <Card.Title>Bedroom Furniture</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button id='contactMeButton' variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card className='mb-3'>
                                <Card.Img className='.card-img-top' variant="top" src="bedroom-pic-2.jpg" />
                                <Card.Body>
                                    <Card.Title>Quality Workmanship</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button id='contactMeButton' variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card className='mb-3'>
                                <Card.Img className='.card-img-top' variant="top" src="bedroom-pic-3.jpg" />
                                <Card.Body>
                                    <Card.Title>Exceptional Service</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button id='contactMeButton' variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            </Container>
        </div>
    )
}

export default Bedrooms;