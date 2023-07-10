import React from 'react';
import { Table } from 'react-bootstrap';
import './footer.css';

 function Footer() {
  return (
    <div className='footer'>
      <Table>
        <tr>
            <th>Sections</th>
            <th>Contact</th>
            <th>Offices</th>
            
            
        </tr>
        <tr>
            <td>Home</td>
            <td><img className='imgs' src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png" alt="insta"></img></td>
            <td>Sec-52,Noida</td>
            
        </tr>
        <tr>
            <td>Courses</td>
            <td><img className='imgs' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png'  alt="facebook"></img></td>
            <td>Ashram, NEW DELHI</td>
            
        </tr>
        <tr>
            <td>Hiring Partners</td>
            <td><img className='imgs' src='https://static.vecteezy.com/system/resources/previews/018/930/745/original/twitter-logo-twitter-icon-transparent-free-free-png.png' alt="twiter"></img></td>
            <td>Agra,UttarPradesh</td>
            
        </tr>

        <tr>
            <td>About</td>
            <td>+91 93594144</td>
            <td>Noida, Electronic City</td>
            
        </tr>

      </Table>
    </div>
  )
}


export default Footer;