import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Post from '../../components/post/Post';
import './articles.css';

function ArticlesPage(){
    return(
        <>
        <h1 id='articles-title'>Articles and Assessments</h1>
        <p>Read some of our articles to educate yourself about environment 
            or take our risk assessment for your home</p>
        <hr/>
        <Row xs={1} md={2} id='risks-container'>
            <Col id='risks-container-left'>
                <h3>Risk Assessment</h3>
                <p>Tick off our checklist to determine what needs to be done in your home to ensure safety</p>
                <Button id='risks-button' href='/risks-assessment'> Start Assessing </Button>
            </Col>
            <Col id='risks-container-right'>
                <img src={require("../../assets/spring-cleaning.jpg")} width="80%" height="auto"/>
            </Col>
        </Row>
        <hr/>
        <Row id='articles'>
            <Post/>
            <Post/> 
            <Post/> 
            <Post/> 
            <Post/> 
            <Post/> 
        </Row>
        
        </>
    )
}

export default ArticlesPage;