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
        border: "none",
        color: "#45523E",
        backgroundColor: "transparent"
    },
    border: {
        border: "1px solid black"
    }
}

function Furniture() {



    return (
        <div>
            <Container style={styles.container} className='text-center'>
                <div className="bedroom-banner"></div>

                <Card style={styles.noBorder} className="text-center m-3">
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
                    <Row>
                        <Col md={4} className='mb-4'>
                            <Card id='card'>
                                <Card.Img className='.card-img-top' variant="top" src="../bedroom-pic-1.jpg" />
                                <Card.Body>
                                    <Card.Title>Fitted Bedrooms</Card.Title>
                                    <Card.Text>
                                        <p>Transform your bedroom into a serene retreat with our bespoke fitted bedrooms. Our expert craftsmen design fitted wardrobes, custom dressers, and elegant storage solutions that maximize space while enhancing the beauty of your bedroom. </p>
                                        Each piece is made to measure, ensuring a perfect fit and a cohesive look. With a variety of finishes and styles to choose from, your fitted bedroom will be a perfect blend of functionality and sophistication.

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4} className='mb-4'>
                            <Card id='card'>
                                <Card.Img className='.card-img-top' variant="top" src="bedroom-pic-2.jpg" />
                                <Card.Body>
                                    <Card.Title>Custom Office Furniture</Card.Title>
                                    <Card.Text>
                                        <p>In today's work-from-home environment, a well-designed office is more important than ever. Our custom office furniture solutions include bespoke desks, ergonomic seating, and efficient storage, all designed to boost productivity and comfort. </p>
                                        Whether you need a complete office setup or a single statement piece, we create furniture that combines style with practicality.

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4} className='mb-4'>
                            <Card id='card'>
                                <Card.Img className='.card-img-top' variant="top" src="bedroom-pic-3.jpg" />
                                <Card.Body>
                                    <Card.Title>Custom Media Walls</Card.Title>
                                    <Card.Text>
                                        <p>Enhance your living room with our custom media walls, designed to integrate seamlessly with your lifestyle and decor. Our media walls provide a stylish and functional centerpiece for your home, perfectly housing your television, audio equipment, and decorative items. </p>
                                        We offer a range of designs, from contemporary minimalism to classic elegance, ensuring your media wall complements your space beautifully. Every custom media wall is crafted with precision and attention to detail, using high-quality materials for a durable and aesthetically pleasing finish.

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

export default Furniture;