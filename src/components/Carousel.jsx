import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import '../main.css';
import { LinkContainer } from 'react-router-bootstrap'

const styles = {
    carousel: {
        height: '55vh',
        objectFit: 'contain'
    },
    carouselImg: {
        height: '100%',
        width: '100%',
        objectFit: 'cover'
    },
    paragraph: {
        marginTop: '7px',
        color: "#F1F1EC"
    }
};

function HomeCarousel() {
    return (
        <Carousel>
            <Carousel.Item style={styles.carousel}>
                <img className='d-block w-100' style={styles.carouselImg} src='../neptune-henley-kitchen.jpg' alt='An image of a kitchen' />
                <Carousel.Caption>
                    <LinkContainer to='/ContactMe'><Button id='carouselButton' variant="secondary" size="lg">
                        Contact Me →
                    </Button>
                    </LinkContainer>
                    <p style={styles.paragraph}>Neptune Henley Kitchen painted in Snow</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={styles.carousel}>
                <img className='d-block w-100' style={styles.carouselImg} src='../neptune-suffolk-kitchen.jpg' alt='An image of a kitchen' />
                <Carousel.Caption>
                    <LinkContainer to='/ContactMe'><Button id='carouselButton' variant="secondary" size="lg">
                        Contact Me →
                    </Button>
                    </LinkContainer>
                    <p style={styles.paragraph}>Neptune Suffolk Kitchen painted in Driftwood</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={styles.carousel}>
                <img className='d-block w-100' style={styles.carouselImg} src='../neptune-suffolk-kitchen-2.jpg' alt='An image of a kitchen' />
                <Carousel.Caption>
                    <LinkContainer to='/ContactMe'><Button id='carouselButton' variant="secondary" size="lg">
                        Contact Me →
                    </Button>
                    </LinkContainer>
                    <p style={styles.paragraph}>
                        Neptune Suffolk Kitchen painted in Ink
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default HomeCarousel;