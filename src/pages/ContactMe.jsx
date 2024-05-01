import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../main.css"

const styles = {
    container: {
        height: "90vh"
    },
    title1: {
        fontWeight: "500",
        color: "#222831",
        letterSpacing: "2px",
    },
    button: {
        margin: "20px",
        color: "#393e46",
    },
    subtitle: {
        color: "#393e46"
    },
    card: {
        border: "none",
        width: "80%",
        padding: "30px 0px",
        borderRadius: "0px",
        boxShadow: "rgba(0, 0, 0, 0.3) 0px 0px 10px 0px",
        backgroundColor: "#F8F9FA"
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
            <h1 className='mb-5' style={styles.title1}>Want to get in touch?</h1>
            <Card style={styles.card} className="text-center">
                <Card.Body>
                    <Card.Title style={styles.subtitle}>Use the options below to contact us</Card.Title>
                    <Button className='m-3' id='contactMeButton' variant="primary"><img style={styles.icon} className='me-2' src='../email-icon.png' alt='An icon representing email'></img> Email Address</Button>
                    <Button className='m-3' id='contactMeButton' variant="primary"><img style={styles.icon} className='me-2' src='../phone-icon.png' alt='An icon representing phone'></img> Phone Number</Button>
                </Card.Body>
            </Card>
            <Container className='d-flex align-items-center justify-content-center'>
                <img style={styles.img} className='m-5' src="../neptune-logo.jpg" alt="The logo of the furniture and kitchen company Neptune" />
                <img style={styles.img} className='m-5' src="" alt="The logo of another kitchen brand" />
                <img style={styles.img} className='m-5' src="" alt="The logo of another kitchen brand" />
            </Container>
        </Container>
    );
}

export default ContactMe;