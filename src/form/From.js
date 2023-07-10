import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import '../form/form.css';


function Myfrom() {
    const[email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    const {handleSubmit} =useForm();
    const onSubmit=(data)=>{
        console.log(email);
        console.log(pass);
    };
   
     
    
  
  return (
    <div className='form '>
        <h1 className='text-center'>LogIn Form</h1>
    <Form onSubmit={handleSubmit(onSubmit)} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control className='form-input ' onChange={(e)=>setEmail(e.target.value)} type="email"  placeholder="Enter email"  />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control className='form-input' onChange={(d)=>setPass(d.target.value)} type="password" placeholder="Password"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default Myfrom;