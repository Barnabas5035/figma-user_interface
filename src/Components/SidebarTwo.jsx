import React from 'react'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'
import MasterPage from './mainPage/MasterPage'

const SidebarTwo = () => {
  return (
    <MasterPage>
      <div className=' ' style={{ marginTop: '60px', marginLeft: '50px' }}>
        <Button variant='info' size='sm' className='me-2  rounded-pill'>
          Design
        </Button>
        <div style={{ marginTop: '45px' }}>
          <h4 className='display-4'>Bring those ideas to life</h4>
          <h4 className=' display-7 text-wrap w-25'>
            FigJam and Figma live side-by-side, so all design work, from
            ideation to execution, can be found in one place.
          </h4>
        </div>
        <div>
          <Link to='/' className='display-6'>
            Explore Future <AiOutlineArrowRight />
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
                “FigJam adds a whole new level of end-to-end collaboration—from
                brainstorming, research workshops, to design jams.”
              </p>
            </Card.Text>
            <div className='d-flex '>
              <Card.Img
                className='rounded-circle  border border-primary border-3 '
                src='download (1).jpg'
                style={{ width: '50px ', borderRadius: '2rem', height: '60px' }}
              />
              <div className='ms-4'>
                <h5>Jame Harrt</h5>
                <p>UX Manager at Shopify</p>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className=' ' style={{ marginTop: '60px', marginLeft: '50px' }}>
        <Button variant='success' size='sm' className='me-2  rounded-pill'>
          Build
        </Button>
        <div style={{ marginTop: '45px' }}>
          <h4 className='display-4'>Powerful design systems</h4>
          <h4 className=' display-7 text-wrap w-25'>
            Increase design consistency with searchable assets and shareable
            styles in one home—centralized and accessible to your entire company
          </h4>
        </div>
        <div>
          <Link to='/' className='display-6 text-success'>
            Build System
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
                “With Figma, it’s easier to maintain our design system. But the
                real success is seeing it spread across the entire organization
                from engineers to PMs.”
              </p>
            </Card.Text>
            <div className='d-flex '>
              <Card.Img
                className='rounded-circle  border border-primary border-3 '
                src='download (1).jpg'
                style={{ width: '50px ', borderRadius: '2rem', height: '60px' }}
              />
              <div className='ms-4'>
                <h5>Diana Mounter</h5>
                <p>Design Ops Manager at GitHub</p>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className=' ' style={{ marginTop: '60px', marginLeft: '50px' }}>
        <Button variant='success' size='sm' className='me-2  rounded-pill'>
          Build
        </Button>
        <div style={{ marginTop: '45px' }}>
          <h4 className='display-4'>Ship better outcomes</h4>
          <h4 className=' display-7 text-wrap w-25'>
            Deliver better products and make an impact with a platform that
            connects the dots across design, product, and development
          </h4>
        </div>
        <div>
          <Link to='/' className='display-6 text-success'>
            Try for free today <AiOutlineArrowRight />
          </Link>
        </div>
      </div>
    </MasterPage>
  )
}

export default SidebarTwo
