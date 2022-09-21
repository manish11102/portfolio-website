import React from 'react'
import myimage from './myimage.jpg';
//import Login from "./components/Login";

export default function Home() {
  return (
    <>
   
    <br />
    <div className='heading1'>

<h3><u>Welcome to My Portfolio</u></h3>
</div>
<div className='rowC'>

<div className='about1'>
<br/><div class="columns download">
          <p>
          <button><a href={require("./cv.pdf")} download="Manish_Kumar_CV">Download My Resume</a></button>
          </p>
         
       </div>
       <b>Intro:</b> My name is Manish Kumar.<br/><br/>
<b>Expertise:</b> Photography and Media Editing.<br/><br/>
<b>About Myself:</b> I am working as a full time photography since 10 years. I have worked in sevral organisation like Yashraj Films,Amir Khan Productions,etc.
<br/><br/>
<b>Qualification:</b><br/>
<div className='rowC'>
    <div className='col-md-2' ></div>
<div className='col-md-8' >
  <table class="table border shadow" >
        
          <thead class="thead-dark">
            <tr>
            <th scope="col">S.N.</th>
              <th scope="col">Course</th>
              <th scope="col">Institute</th>
              <th scope="col">Year</th>
              
            </tr>
          </thead>
          <tbody>
          <tr> <td>1.</td><td>Digital Studio</td><td>Digital Institute,Delhi</td><td>2009-2011</td>
                
                </tr>
              
               <tr> <td>2.</td><td>VFX and Animation Institute</td><td>VFX Tech,Lucknow</td><td>2011-2013</td></tr>
   
       
          </tbody>
        </table>
</div>
</div>

</div>

<div className='image1'>
      <img src={myimage}/>
    </div>
</div>
  
    </>
  )
}
