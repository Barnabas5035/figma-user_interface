import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'
import MasterPage from './mainPage/MasterPage'
const Sidebar = () => {
  return (
    <MasterPage>
      <div className=' ' style={{ marginTop: '60px', marginLeft: '50px' }}>
        <Button variant='primary' size='sm' className='me-2  rounded-pill'>
          Brainstorm
        </Button>
        <div style={{ marginTop: '45px' }}>
          <h4 className='display-4'>Explore ideas together</h4>
          <h4 className=' display-7 text-wrap w-25'>
            Diagram, sticky-note, and workshop in FigJam—an online whiteboard
            for you and your team to brainstorm in the open
          </h4>
        </div>
        <div>
          <Link to='/' className='display-6'>
            Meet FigJam
            <AiOutlineArrowRight />
          </Link>
        </div>
      </div>
      <div>
        <Card
          style={{
            width: '40rem',
            height: '20rem',
            marginLeft: '50px',
            marginTop: '45px',
          }}
        >
          <Card.Body className='shadow-lg bg-white fw-bolder fs-4 border '>
            <Card.Text className='mt-4'>
              <p>
                "FigJam works great for a brainstorm or a retrospective, or
                anything really. Having the results side-by-side with our Figma
                files is a great plus.”
              </p>
            </Card.Text>
            <div className='d-flex '>
              <Card.Img
                className='rounded-circle  border border-primary border-3 '
                src='download (1).jpg'
                style={{ width: '50px ', borderRadius: '2rem', height: '60px' }}
              />
              <div className='ms-4'>
                <h5>Jame Robert</h5>
                <p>Head of Design at Discord</p>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </MasterPage>
  )
}

export default Sidebar
