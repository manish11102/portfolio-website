import React from 'react'
//import Login from "./components/Login";
import Card from 'react-bootstrap/Card';

export default function Home() {
  return (
    <>
   
    <br />
    

<div className='about1'>
<Card style={{ width: '50rem', color:'blue'   }}>

      <Card.Body>
        <Card.Title><b>Recommended by:</b>&nbsp;&nbsp;&nbsp;Yash Chopra</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"><b>Designation:</b>&nbsp;&nbsp;&nbsp;MD Yashraj Films</Card.Subtitle>
        <Card.Text style={{ width: '50rem', color:'black'   }}>
          <b>Comment:</b>&nbsp;&nbsp;Manish is a very talented and punctual person. I have worked with him 2 years and i strongly recommend him for VFX technology.
        </Card.Text>
        
      </Card.Body>
    </Card></div>
    <div className='about1'>
<Card style={{ width: '50rem', color:'blue'   }}>

      <Card.Body>
        <Card.Title><b>Recommended by:</b>&nbsp;&nbsp;&nbsp;Aamir Khan</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"><b>Designation:</b>&nbsp;&nbsp;&nbsp;Founder, Aamir khan Productions</Card.Subtitle>
        <Card.Text style={{ width: '50rem', color:'black'   }}>
          <b>Comment:</b>&nbsp;&nbsp;Manish is a very talented and punctual person. I have worked with him 2 years and i strongly recommend him for VFX technology.
        </Card.Text>
        
      </Card.Body>
    </Card></div>
    <div className='about1'>
<Card style={{ width: '50rem', color:'blue'   }}>

      <Card.Body>
        <Card.Title><b>Recommended by:</b>&nbsp;&nbsp;&nbsp;Ajay Devgan</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"><b>Designation:</b>&nbsp;&nbsp;&nbsp;Actor</Card.Subtitle>
        <Card.Text style={{ width: '50rem', color:'black'   }}>
          <b>Comment:</b>&nbsp;&nbsp;Very talented person. Worked in my films for great Animation and VFX.
        </Card.Text>
        
      </Card.Body>
    </Card></div>
    





   


    </>
  )
}
