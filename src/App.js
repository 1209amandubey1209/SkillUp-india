import './App.css';
import  Myhome  from './Home';
import Mynavbar from './Navbar';
import Mycards from './cards/Cards';

import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Footer from './footer/Footer';
import Myfrom from './form/From';
import Service from './services/Service.js';



function App() {
  return (
    <>
     <Mynavbar></Mynavbar>
    

    <BrowserRouter>
    <Routes>
    {/* <div className="App">
      <div className='nav_bar' style={{boxShadow:"0px 5px 5px gray"}}> */}
       
      {/* </div>
      <div className='header'> */}
        
      {/* </div>
      <br />
      <br/>
      <hr/>
      <h1 className='heading'>Here are the courses , which we are providing </h1>
      <div className='app-body' > */}
        <Route path="/" element={<Myhome/>}></Route>
        <Route path="home" element={<Myhome/>}></Route>
        <Route path="course" element={<Mycards/>}></Route>
        <Route path="form" element={<Myfrom/>}></Route>
        <Route path="service" element={<Service/>}></Route>
       
        {/* <Mycards/> */}
      {/* </div>
    </div> */}
    </Routes>
    </BrowserRouter>
    <Footer/>
    
    </>
  );
}

export default App;
