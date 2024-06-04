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

function Kitchens() {



    return (
        <div id='page-bg'>
            <Container style={styles.container} className='text-center'>
                <div className="kitchen-banner"></div>

                <Card style={styles.noBorder} className="text-center m-3">
                    <Card.Body>
                        <Card.Title><h3>Kitchens</h3></Card.Title>
                        <Card.Text>
                            <p>At ForestWood Design, we believe in crafting more than just furniture – we create enduring spaces that transform your home. Specializing in bespoke kitchens, fitted bedrooms, custom office furniture, and custom media walls, our family-run business combines tradition, craftsmanship, and sustainability to deliver exceptional results. </p>
                            With over 100 years of combined experience, our team – comprised of two brothers and our father – brings unparalleled expertise and a passion for perfection to every project.                        </Card.Text>
                        <LinkContainer to='/OurWork'>
                            <Button id='contactMeButton' variant="primary">View our work in the Gallery</Button>
                        </LinkContainer>

                    </Card.Body>
                </Card>

                <Container>
                    <Row>
                        <Col md={6} className='mb-4'>
                            <Card id='card'>
                                <Card.Img className='.card-img-top' variant="top" src="../kitchen-pic-2.jpg" />
                                <Card.Body>
                                    <Card.Title>Solid Wood Kitchens</Card.Title>
                                    <Card.Text>
                                        <p>For those who appreciate the natural beauty and durability of wood, our solid wood kitchens offer a perfect blend of elegance and resilience. Using sustainably sourced timber, we design and construct kitchens that are built to last.</p>
                                        From rich, dark woods to light, airy finishes, our solid wood kitchens can be customized to match your style and needs. Experience the warmth and charm that only solid wood can bring to your kitchen.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={6} className='mb-4'>
                            <Card id='card'>
                                <Card.Img className='.card-img-top' variant="top" src="kitchen-pic-7.jpg" />
                                <Card.Body>
                                    <Card.Title>Hand painted Kitchens</Card.Title>
                                    <Card.Text>
                                        <p>Our hand painted kitchens are a testament to our dedication to quality and aesthetic appeal. Each kitchen is meticulously crafted and painted by hand, ensuring a unique finish that stands out. </p>
                                        We use eco-friendly paints and sustainable materials to create kitchens that are not only beautiful but also kind to the environment. Whether you desire a modern, minimalist look or a classic, timeless design, our bespoke kitchens are tailored to meet your exact specifications.
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

export default Kitchens;