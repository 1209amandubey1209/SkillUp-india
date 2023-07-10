import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './cards.css';
import { Fragment } from 'react';

function Mycards() {
  return (
    
    <Fragment >
      
      <h1>Here , Some our popular Courses</h1>
      <hr />
    <div className='row cards'   >
     
      {/* this is html card */}

    <Card className="card-st col-auto" style={{ width: '18rem'}} >
      <Card.Img variant="top" src="https://wallpapercave.com/wp/wp7421222.jpg" />
      <Card.Body>
        <Card.Title>Ultimate HTMl Course</Card.Title>
        <Card.Text>
          This is Coutrse is designed for Biginners as well as Profissionals . This course give's you wings to fly in the Web development World.
        </Card.Text>
        <Button href='https://html.com/' variant="primary">Let's Go</Button>
      </Card.Body>
    </Card>

    {/* this is css card */}

    <Card className="card-st col-auto" style={{ width: '18rem',position:"relative" }}>
      <Card.Img variant="top" src="https://blog.logrocket.com/wp-content/uploads/2020/02/how-to-create-randomly-generated-backgrounds-css-paint-api.png" />
      <Card.Body>
        <Card.Title>Ultimate CSS Course</Card.Title>
        <Card.Text>
        This is Coutrse is designed for Biginners as well as Profissionals . This course give's you wings to fly in the Web development World.
        </Card.Text>
        <Button href="https://www.w3schools.com/css/" variant="primary">Let's Go</Button>
      </Card.Body>
    </Card>

      {/* this is JavaScript card */}

      <Card className="card-st col-auto" style={{ width: '18rem',position:"relative" }}>
      <Card.Img variant="top" src="https://e0.pxfuel.com/wallpapers/316/193/desktop-wallpaper-javascript.jpg" />
      <Card.Body>
        <Card.Title>JavaScript</Card.Title>
        <Card.Text>
        This is Coutrse is designed for Biginners as well as Profissionals . This course give's you wings to fly in the Web development World.
        </Card.Text>
        <Button href="https://www.w3schools.com/js/" variant="primary">Let's Go</Button>
      </Card.Body>
    </Card>

    

    </div>

    <div className='cards row' style={{display:"flex"}}>
     
      {/* this is bootstrap card */}

    <Card className="card-st col-auto" style={{ width: '18rem'}} >
      <Card.Img variant="top" src="https://res.cloudinary.com/practicaldev/image/fetch/s--DXEULsa---/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ye9madojmh8bs7pnhaen.png" />
      <Card.Body>
        <Card.Title>Bootstrap 5</Card.Title>
        <Card.Text>
        This is Coutrse is designed for Biginners as well as Profissionals . This course give's you wings to fly in the Web development World.
        </Card.Text>
        <Button href='https://getbootstrap.com/docs/5.3/getting-started/introduction/' variant="primary">Let's Go</Button>
      </Card.Body>
    </Card>

    {/* this is jquery card */}

    <Card className="card-st col-auto" style={{ width: '18rem',position:"relative" }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_NBpU87lzucAK6pmuI7qSKhDY4h-8r4lpGw&usqp=CAU" />
      <Card.Body>
        <Card.Title>JQuery</Card.Title>
        <Card.Text>
        This is Coutrse is designed for Biginners as well as Profissionals . This course give's you wings to fly in the Web development World.
        </Card.Text>
        <Button href="https://jquery.com/" variant="primary">Let's Go</Button>
      </Card.Body>
    </Card>

      {/* this is reactjs card */}

      <Card className="card-st col-auto" style={{ width: '18rem',position:"relative" }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoD9nduODgEX90baYrLHThjEP_OHVmijs7GNXDcBPZmEWmU6nqoiEkZk6t7XFdr5MDOew&usqp=CAU" />
      <Card.Body>
        <Card.Title>React JS</Card.Title>
        <Card.Text>
        This is Coutrse is designed for Biginners as well as Profissionals . This course give's you wings to fly in the Web development World.
        </Card.Text>
        <Button href='https://react.dev/' variant="primary">Let's Go</Button>
      </Card.Body>
    </Card>

    

    </div>

    <div className='cards row' style={{display:"flex"}}>
     
      {/* this is nodejs card */}

    <Card className="card-st col-auto" style={{ width: '18rem'}} >
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY0NIDdXXhxVFJBrBE3mdTPFHcqMI2rHafNA&usqp=CAU" />
      <Card.Body>
        <Card.Title>Node JS</Card.Title>
        <Card.Text>
        This is Coutrse is designed for Biginners as well as Profissionals . This course give's you wings to fly in the Web development World.
        </Card.Text>
        <Button href='https://nodejs.org/en' variant="primary">Let's Go</Button>
      </Card.Body>
    </Card>

    {/* this is mongodb card */}

    <Card className="card-st col-auto" style={{ width: '18rem',position:"relative" }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRscjehdU37qVS-JgjU73AjTpJ_2plUACK6gw&usqp=CAU" />
      <Card.Body>
        <Card.Title>Mongo DB</Card.Title>
        <Card.Text>
        This is Coutrse is designed for Biginners as well as Profissionals . This course give's you wings to fly in the Web development World.
        </Card.Text>
        <Button href="https://www.mongodb.com/" variant="primary">Let's Go</Button>
      </Card.Body>
    </Card>

      {/* this is fullstack card */}

      <Card className="card-st col-auto" style={{ width: '18rem',position:"relative" }}>
      <Card.Img variant="top" src="https://image.slidesharecdn.com/fullstackppt-171127063649/85/the-full-stack-web-development-1-320.jpg?cb=1665787392" />
      <Card.Body>
        <Card.Title>FullStack Program</Card.Title>
        <Card.Text>
        This is Coutrse is designed for Biginners as well as Profissionals . This course give's you wings to fly in the Web development World.
        </Card.Text>
        <Button href="https://www.w3schools.com/" variant="primary">Let's Go</Button>
      </Card.Body>
    </Card>

    

    </div>
    </Fragment>
  );
}

export default Mycards;