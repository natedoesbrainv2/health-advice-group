import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './articles.css';

function ArticlesPage() {
    return (
        <>
            <div id='articles-top'>
                <h1 id='articles-title'>Articles and Assessments</h1>
                <p>Read some of our articles to educate yourself about environment
                    or take our risk assessment for your home</p>
                <hr />
            </div>
            <Row xs={1} md={2} id='risks-container'>
                <Col id='risks-container-left'>
                    <h3>Risk Assessment</h3>
                    <p>Tick off our checklist to determine what needs to be done in your home to ensure safety</p>
                    <Button id='risks-button' href='/risks-assessment'> Start Assessing </Button>
                </Col>
                <Col id='risks-container-right'>
                    <img src={require("../../assets/spring-cleaning.jpg")} width="80%" height="auto" alt='man dusting window' />
                </Col>
            </Row>
            <hr />
            <Row id='articles'>
                <Card id='article-post'>
                    <a href='environmental-health-conditons'>
                        <Card.Img src='https://images.pexels.com/photos/221012/pexels-photo-221012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' height='200px' alt='factory emitting smoke' />
                        <Card.Body id='article-texts'>
                            <Card.Title>Environmental Health Conditions</Card.Title>
                            <Card.Text>Learn more about the struggles air pollution could be causing you.</Card.Text>
                            <Button variant='light'>See Article</Button>
                        </Card.Body>
                    </a>
                </Card>

                <Card id='article-post'>
                    <a href='extreme-weather'>
                        <Card.Img src='https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' height='200px' alt='lightning storm' />
                        <Card.Body id='article-texts'>
                            <Card.Title>Extreme Weather</Card.Title>
                            <Card.Text>From Snowstorms to Heatwaves. Here is how to deal with extreme weather.</Card.Text>
                            <Button variant='light'>See Article</Button>
                        </Card.Body>
                    </a>
                </Card>

                <Card id='article-post'>
                    <a href='seasonal-allergies'>
                        <Card.Img src='https://images.pexels.com/photos/3807629/pexels-photo-3807629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' height='200px' alt='woman sneezing'/>
                        <Card.Body id='article-texts'>
                            <Card.Title>Seasonal Allergies</Card.Title>
                            <Card.Text>what are they and how can we better deal with them?</Card.Text>
                            <Button variant='light'>See Article</Button>
                        </Card.Body>
                    </a>
                </Card>
            </Row>

        </>
    )
}

export default ArticlesPage;