import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/esm/Button'
import { FaFigma, FaLanguage } from 'react-icons/fa'

function Navbars() {
  return (
    <div>
      <Navbar bg='light' expand='lg' className='shadow-sm mt-4'>
        <Container className='container-fluid'>
          <Container className='container-fluid'>
            <Navbar.Brand href='#home' className='text-danger fw-6 fs-4 fa-5x'>
              <FaFigma className='mb-4' size={40} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <div></div>
          </Container>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className=' d-flex m-auto mt-2 mb-lg-0  me-2'>
              <NavDropdown title='Product' id='basic-nav-dropdown'>
                <NavDropdown.Item href='/action'>Action</NavDropdown.Item>
                <NavDropdown.Item href='/action'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href='/action'>Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='/action'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title='Enterprise' id='basic-nav-dropdown'>
                <NavDropdown.Item href='/action-1'>Action</NavDropdown.Item>
                <NavDropdown.Item href='/action-1'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href='/action-1'>Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='/action-1'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title='Community' id='basic-nav-dropdown'>
                <NavDropdown.Item href='/action'>Action</NavDropdown.Item>
                <NavDropdown.Item href='/action-1'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href='/action-1'>Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='/action'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Item>
                <Nav.Link href='/'>pricing</Nav.Link>
              </Nav.Item>

              <NavDropdown title='Company' id='basic-nav-dropdown'>
                <NavDropdown.Item href='/action-1'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href='/action'>Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='/action'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Dropdown>
                <Dropdown.Toggle variant='white' id='dropdown-basic'>
                  <FaLanguage size={20} />
                  english
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href='#/action-1'>Deutsch</Dropdown.Item>
                  <Dropdown.Item href='#/action-2'>Français</Dropdown.Item>
                  <Dropdown.Item href='#/action-3'>日本語</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Nav.Item>
                <Nav.Link href='/#login'>LogIn</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>

          <Button variant='primary ' className='m-auto '>
            <Nav.Link
              href='/#deets'
              className='m-auto'
              variant='success '
              style={{ textDecoration: 'none' }}
            >
              Get Started
            </Nav.Link>
          </Button>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbars
