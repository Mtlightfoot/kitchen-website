import HomeCarousel from '../components/Carousel'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const styles = {
    card: {
        paddingTop: "20px"
    },
}

function Home() {

    return (
        <div>

            <HomeCarousel />
            <div className="banner text-center mt-3">
                <h1 className='home-quote'>Discover the difference that comes with over a century of combined experience and a commitment to sustainable, high-quality craftsmanship.<br></br> <br></br>Welcome to ForestWood Design – where your vision becomes our mission.</h1>
            </div>

            <Container className='text-center'>
                <Row className='mt-3 mb-5'>
                    <Col md={4} className='mb-3'>
                        <Card className='mb-3' id='card-home'>
                            <div className="card-img-top-home">
                                <div className="inner-box">
                                    <img src="../carpenter-icon.png" alt="An icon representing carpentry" />
                                    <h2 className='signature-font'>Sustainable Craftsmanship</h2>
                                </div>
                            </div>
                            <Card.Body><Card.Text>
                                <p>At the heart of ForestWood Design is our commitment to sustainability. We believe in responsible sourcing and use of materials, ensuring that our creations have a minimal environmental impact. Our sustainable practices include using eco-friendly paints, recycling wood scraps, and prioritizing materials from renewable sources.</p>
                                We are dedicated to crafting furniture that not only enhances your home but also preserves our planet for future generations.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} className='mb-3'>
                        <Card className='mb-3' id='card-home'>
                            <div className="card-img-top-home">
                                <div className="inner-box">
                                    <img src="../forest-icon-2.png" alt="An icon representing carpentry" />
                                    <h2 className='signature-font'>Welcome to ForestWood Design</h2>
                                </div>
                            </div>
                            <Card.Body>
                                <Card.Text>
                                    <p>At ForestWood Design, we believe in crafting more than just furniture – we create enduring spaces that transform your home. Specializing in bespoke kitchens, fitted bedrooms, custom office furniture, and custom media walls, our family-run business combines tradition, craftsmanship, and sustainability to deliver exceptional results.</p>
                                    With over 100 years of combined experience, our team – comprised of two brothers and our father – brings unparalleled expertise and a passion for perfection to every project.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} className='mb-3'>
                        <Card className='mb-3' id='card-home'>
                            <div className="card-img-top-home">
                                <div className="inner-box">
                                    <img src="../kitchen-icon.png" alt="An icon representing carpentry" />
                                    <h2 className='signature-font'>Our Heritage</h2>
                                </div>
                            </div>
                            <Card.Body>
                                <Card.Text>
                                    <p>With a rich heritage in cabinet making and furniture design, our family’s passion for craftsmanship spans generations. Our father and two brothers have honed their skills over decades, bringing a unique blend of experience and innovation to ForestWood Design.</p>
                                    This legacy of excellence is evident in every piece we create, from bespoke kitchens and fitted bedrooms to custom office furniture and media walls.                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>






                </Row>
            </Container>

        </div>
    )
}

export default Home;