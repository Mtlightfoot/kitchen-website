import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

const styles = {
    carousel: {
        height: '90vh',
        objectFit: 'contain'
    },
    carouselImg: {
        height: '100%',
        width: '100%',
        objectFit: 'cover'
    },
    button: {
        backgroundColor: 'transparent',
        borderRadius: '2px',
        border: '2px solid white',
        letterSpacing: '2px',
        padding: '10px 30px'
    },
    paragraph: {
        marginTop: '7px'
    }
};

function HomeCarousel() {
    return (
        <Carousel>
            <Carousel.Item style={styles.carousel}>
                <img className='d-block w-100' style={styles.carouselImg} src='../neptune-henley-kitchen.jpg' alt='An image of a kitchen' />
                <Carousel.Caption>
                    <Button style={styles.button} variant="secondary" size="lg">
                        Contact Me →
                    </Button>
                    <p style={styles.paragraph}>Neptune Henley Kitchen painted in Snow</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={styles.carousel}>
                <img className='d-block w-100' style={styles.carouselImg} src='../neptune-suffolk-kitchen.jpg' alt='An image of a kitchen' />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={styles.carousel}>
                <img className='d-block w-100' style={styles.carouselImg} src='../neptune-suffolk-kitchen-2.jpg' alt='An image of a kitchen' />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default HomeCarousel;