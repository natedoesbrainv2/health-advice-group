
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Post.css'

function Post(){
    return(
    <Card id='article-post'>
        <Card.Img src='https://www.portsmouth.co.uk/webimg/b25lY21zOjRmMDExZmFlLTlkNTItNDNmMi1iZmY4LWM2OTUwZjdjZjMwNzpmODQ4MTQ4NS1mMjhlLTRlZTUtOTUyZi05NjQ3NWQyZjg5MDY=.jpg?width=640&quality=65' width='20px' height='20px'/>
        <Card.Body id='article-texts'>
            <Card.Title>[Articles]</Card.Title>
            <p id='info'>
                <a id='author'>Nate Stevenson</a>
                <time>20-03-2023 9:33</time>
            </p>
            <Card.Text>This is the articles summary</Card.Text>
            <Button variant='light'>See Article</Button>
        </Card.Body>
    </Card>
    )
}

export default Post;

