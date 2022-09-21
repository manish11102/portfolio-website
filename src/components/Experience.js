import React from 'react'
//import Login from "./components/Login";
import Card from 'react-bootstrap/Card';

export default function Home() {
  return (
    <>
   
    <br />
    
<div className='rowC'>
<div className='about1'>
<Card style={{ width: '18rem', color:'green'   }}>

      <Card.Body>
        <Card.Title>Yash Raj Films</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">2012-2014</Card.Subtitle>
        <Card.Text>
          Working as Assistant VFX Enginner.
        </Card.Text>
        <Card.Link href="#">See details</Card.Link>
      </Card.Body>
    </Card></div>
<div className='image1'>
<Card style={{ width: '18rem' ,color:'red' }}>
      <Card.Body>
        <Card.Title>Amir Khan Productions</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">2014-2018</Card.Subtitle>
        <Card.Text>
          Working as VFX and Cinema Executive Enginner.
        </Card.Text>
        <Card.Link href="#">See details</Card.Link>
      </Card.Body>
    </Card>
    </div>
</div>
<br/><br/><br/>
<div>
<div className='rowC'>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<div className='col-md-8' >
<h3>Achievement</h3>
  <table class="table border shadow" >
        
          <thead class="thead-dark">
            <tr>
            <th scope="col">S.N.</th>
              <th scope="col">Achievement</th>
              <th scope="col">Year</th>
              
            </tr>
          </thead>
          <tbody>
          <tr> <td>1.</td><td>Best VFX Award for film Action Jaction </td><td>2012</td>
                
                </tr>
              
               <tr> <td>2.</td><td>Gold Medlist, VFX Tech ,Lucknow</td><td>2013</td></tr>
   
       
          </tbody>
        </table>
</div>
</div>


</div>



   


    </>
  )
}
