import Card from 'react-bootstrap/Card';
import './service.css'

function Myservice(props) {
  return (
    <Card className='auto-col m-5 mt-2' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
      
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default Myservice;