import React from 'react'
import Myservice from './Comp'
import './service.css';

 function Service() {
  return (
    <div className='services row'>
        <h1>All Our Services</h1>
        <p>SkillUp India offers a wide range of services and products for beginners and professionals,
            helping millions of people everyday to learn and master new skills.</p>
            <hr/>
      <Myservice title="Free Tutotials"/>
      <Myservice title="Refrences"/>
      <Myservice title="Create a Website"/>
      <Myservice title="Exercises"/>
      <Myservice title="Quizzes"/>
      <Myservice title="Get Certified"/>
      <Myservice title="Log in / Sign Up"/>
      <Myservice title="My Learning"/>
      <Myservice title="Upgrade"/>
      <Myservice title="Where To Start"/>
      <Myservice title="Code Editor (Try it)"/>
      <Myservice title="Bootcamps"/>
      <Myservice title="Tamplates"/>
      <Myservice title="How To's"/>
      <Myservice title="Videos"/>
      <Myservice title="CSS Framework"/>
      <Myservice title="Web Hosting"/>
      <Myservice title="Create a Server"/>
      <Myservice title="Browser Statistics"/>
      <Myservice title="Typing Speed"/>
      <Myservice title="AWS Training"/>
      <Myservice title="Color Picker"/>
      <Myservice title="Code Game"/>
      <Myservice title="Newsletter"/>
    </div>
  )
}
export default Service;