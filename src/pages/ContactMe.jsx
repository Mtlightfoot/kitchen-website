import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "../main.css"

const styles = {
    container: {
        minHeight: "90vh"
    },
    subtitle2: {
        color: "#393e46"
    },
    title2: {
        fontWeight: "600",
        color: "white"
    },
    titleBox: {
        backdropFilter: "blur(5px)",
        padding: "5px",
    },
    button: {
        margin: "20px",
        color: "#393e46",
    },
    subtitle: {
        color: "white"
    },
    
    img: {
        width: "20%"
    },
    icon: {
        width: "10%"
    }
};


function ContactMe() {
    return (
        <Container style={styles.container} className='d-flex align-items-center justify-content-center flex-column'>
            <Card className='d-flex justify-content-center text-center align-items-center flex-column mb-4' id='contactMeImg' body>
                <div className="titleBox" style={styles.titleBox}>
                    <h1 style={styles.title2}>Contact Us</h1>
                    <p style={styles.subtitle}>Use the options below to get in contact with us.</p>
                </div>
            </Card>

            <Container className='p-0 justify-content-center align-items-center'>
                <Row>
                    <Col md={6} className='mb-3'><Card style={styles.card} id='card'>
                        <Card.Body>
                            <p>Ready to transform your space with bespoke furniture that reflects your style and values?</p>
                            <p>Contact ForestWood Design today to schedule a consultation. Let us help you create the kitchen, bedroom, office, or media wall of your dreams with our expert craftsmanship and personalized service.</p>
                            <p>Feel free to contact us via email or over the phone!</p>
                            <p>Alternatively you can get in touch with us via our social media links given here.</p>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md={6} className='mb-3'><Card id='card' className="text-center">
                        <Card.Body className='d-flex flex-column '>
                            <Card.Title style={styles.subtitle2}>Want to get in touch?</Card.Title>
                            <a href='mailto:james@kitchen.co.uk'><Button className='m-3' id='contactMeButton' variant="primary"><img style={styles.icon} className='me-2' src='../email-icon.png' alt='An icon representing email'></img> james@email.co.uk</Button></a>
                            <a href='tel:07555304240'><Button className='m-3' id='contactMeButton' variant="primary"><img style={styles.icon} className='me-2' src='../phone-icon.png' alt='An icon representing phone'></img> 07555 304240</Button></a>
                            <div className="socialIcons d-flex justify-content-center">
                                <a href='' className='m-3'><img id='socialButton' src="../facebook-icon.png" alt="A facebook icon" /></a>
                                <a href='' className='m-3'><img id='socialButton' src='../insta-icon.png' alt='A instagram c=icon'></img></a>
                            </div>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default ContactMe;