import React from 'react'
import '../index.css'
import { Button } from 'react-bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Marquee from 'react-fast-marquee'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaFigma,
  FaYoutube,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div
      className='footer-container  '
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'solid',
        marginTop: '24px',

        backgroundColor: '#242424',
      }}
    >
      <div class='card '>
        <Marquee
          behavior='alternate'
          scrollamount='20'
          loop='infinite'
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src='images3.png'
            alt=''
            // style={{ width: '85px', height: '60px' }}
          />
        </Marquee>
      </div>
      <section
        className='footer-subscription  '
        style={{
          padding: '24px',
          marginBottom: '24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <h3 className='display-4'>Join the community</h3>
        <p
          className='footer-subscription-heading'
          style={{ marginTop: '24px', fontSize: '20px', width: '60%' }}
        >
          Learn from others, share your work, and extend your tool set with a
          diverse group of designers, plugin creators, researchers,
          illustrators, content writers, and many more from around the world.
        </p>
        <p
          className='footer-subscription-text'
          size={24}
          style={{ marginBottom: '24px', fontSize: '20px' }}
        >
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              style={{
                padding: '8px,10px',
                borderRadius: '2px',
                marginRight: '10px',
                outLine: 'none',
                border: '3px solid #fff',
                fontSize: '18px',
                marginBottom: '16px',
                color: 'black',
              }}
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button
              buttonStyle='btn--outline'
              style={{
                color: 'white',
                fontSize: '18px',
                textAlign: 'center',
                borderRadius: '4px',
                marginBottom: '10px',
                border: '1px',
              }}
              variant='secondary'
            >
              <Link to='Services' style={{ textDecoration: 'none' }}>
                subscribe
              </Link>
            </Button>
          </form>
        </div>
      </section>
      <div
        className='footer-links'
        style={{
          width: '100%',
          maxWidth: '1000px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div className='footer-link-wrapper d-flex'>
          <div
            className='footer-link-items'
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItem: 'flex-start',
              margin: '16px',
              textAlign: 'left',
              width: '160px',
              boxSizing: 'border-box',
            }}
          >
            <h2 style={{ marginBottom: '16px', color: '#fff' }}>About us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of service</Link>
          </div>
          <div
            className='footer-link-items'
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItem: 'flex-start',
              margin: '16px',
              textAlign: 'left',
              width: '160px',
              boxSizing: 'border-box',
            }}
          >
            <h2 style={{ marginBottom: '16px', color: '#FFF' }}>Contact US</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper d-flex'>
          <div
            className='footer-link-items'
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItem: 'flex-start',
              margin: '16px',
              textAlign: 'left',
              width: '160px',
              boxSizing: 'border-box',
            }}
          >
            <h2 style={{ marginBottom: '16px', color: '#fff' }}>Videos</h2>
            <Link to='/'>Ambassador</Link>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div
            className='footer-link-items'
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItem: 'flex-start',
              margin: '16px',
              textAlign: 'left',
              width: '160px',
              boxSizing: 'border-box',
            }}
          >
            <h2 style={{ marginBottom: '16px', color: '#fff' }}>
              Social media
            </h2>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section
        className='social-media'
        style={{ maxWidth: '1000px', width: '100%' }}
      >
        <div
          class='social-media-wrap'
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItem: 'center',
            width: '90%',
            maxWidth: '1000px',
            margin: '40px auto 0',
          }}
        >
          <div className='footer-logo'>
            <Link
              to='/'
              className='social-logo'
              style={{
                color: '#fff',
                justContent: 'start',
                marginLeft: '20px',
                cursor: 'pointer',
                textDecoration: 'none',
                fontSize: '2rem',
                display: 'flex',
                aliginItem: 'center',
                marginBottom: '16px',
              }}
            >
              FIGMA <FaFigma className='fig' />
            </Link>
          </div>
          <footer
            className='website-rights'
            style={{ color: '#fff', marginBottom: '16px' }}
          >
            FIGMA &copy;2022
          </footer>
          <div
            className='social-icons'
            style={{
              display: 'flex',
              justContent: 'space-between',
              alignItem: 'center',
              width: '240px',
            }}
          >
            <Link
              to='/'
              className='social-icon-link facebook'
              target='_blank'
              aria-label='facebook'
              style={{ color: '#fff', fontSize: '24px' }}
            >
              <FaFacebookF className='fab' />
            </Link>
            <Link
              to='/'
              className='social-icon-link instagram'
              target='_blank'
              aria-label='Instagram'
              style={{ color: '#fff', fontSize: '24px' }}
            >
              <FaInstagram className='fab' />
            </Link>
            <Link
              to='/'
              className='social-icon-link youtube'
              target='_blank'
              aria-label='Youtube'
              style={{ color: '#fff', fontSize: '24px' }}
            >
              <FaYoutube className='fab' />
            </Link>
            <Link
              to='/'
              className='social-icon-link twitter'
              target='_blank'
              aria-label='Twitter'
              style={{ color: '#fff', fontSize: '24px' }}
            >
              <FaTwitter className='fab' />
            </Link>
            <Link
              to='/'
              className='social-icon-link twitter'
              target='_blank'
              aria-label='Linkedin'
              style={{ color: '#fff', fontSize: '24px' }}
            >
              <FaLinkedin className='fab' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
