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
    card: {
        border: "none",
        padding: "30px 0px",
        borderRadius: "0px",
        boxShadow: "rgba(0, 0, 0, 0.3) 0px 0px 10px 0px",
        backgroundColor: "#F8F9FA",
        height: "100%"
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
                    <h1 style={styles.title2}>Contact Me</h1>
                    <p style={styles.subtitle}>Use the options below to get in contact with us.</p>
                </div>
            </Card>

            <Container className='p-0 justify-content-center align-items-center'>
                <Row>
                    <Col md={6} className='mb-3'><Card style={styles.card}>
                        <Card.Body>
                            <p>I am a West Midlands <strong>Neptune accredited kitchen fitter</strong> based in Kenilworth, Warwickshire. I am happy to travel further afield to install your dream kitchen!</p>
                            <p>Please get in touch via <strong><a href='mailto:james@kitchen.co.uk'>email</a></strong> given on this page where we can arrange to have a chat about your kitchen project.</p>
                            <p>Feel free to also give me a <strong><a href='tel:07555304240'>call</a></strong> if you prefer to talk about your project over the phone.</p>
                            <p>Alternatively you can get in touch with me via our social media links given here.</p>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md={6} className='mb-3'><Card style={styles.card} className="text-center">
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