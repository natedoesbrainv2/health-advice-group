
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Post.css'

function Post(){
    return(
    <Card id='article-post'>
        <Card.Img src='https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' height='200px'/>
        <Card.Body id='article-texts'>
            <Card.Title>[Article Title]</Card.Title>
            <Card.Text>This is the articles summary</Card.Text>
            <Button variant='light'>See Article</Button>
        </Card.Body>
    </Card>
    )
}

export default Post;

