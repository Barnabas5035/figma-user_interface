import React from 'react'

import { Link } from 'react-router-dom'
import { FaTwitter } from 'react-icons/fa'
import {
  BsFillCameraVideoFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs'

const Banner = () => {
  return (
    <div>
      <div className='container d-flex justify-content-center text-center mt-4 mb-2 t-50'>
        <h1
          className='d-flex justify-content-center text-center fw-bolder fst-italic align-items-md-center '
          style={{
            color: 'black',
            fontSize: 85,

            textAlign: 'center',

            width: '70%',
            marginTop: '40px',
          }}
        >
          Nothing great is made alone .
        </h1>
      </div>
      <div
        className=' d-flex align-text-center justify-content-center '
        style={{
          color: 'black',

          textAlign: 'center',
        }}
      >
        <h5
          style={{
            color: 'black',
            fontSize: 20,

            textAlign: 'center',

            width: '35%',
            marginTop: '50px',
          }}
        >
          Figma connects everyone in the design process so teams can deliver
          better products, faster
        </h5>
        .
      </div>
      <div className='d-flex justify-content-center m-auto'>
        <button type='button' className='btn btn-primary btn-sm'>
          Get Started
        </button>
      </div>
      <div
        className='card d-flex justify-content-center shadow-sm-p-3 mt-4'
        style={{
          width: '120rem',
          borderColor: 'Background',
          borderRadius: '2rem',
        }}
      >
        <img
          src='/images.jpg'
          alt=''
          className='img-fluid '
          style={{ borderRadius: '2rem' }}
        />
      </div>
      <div
        className='card d-flex justify-content-center'
        style={{
          marginTop: '60px',
          marginLeft: '100px',
          height: '12rem',
          padding: '0.1rem',
          borderRadius: '2rem',
          backgroundColor: 'white',
          borderColor: 'ActiveBorder',
          border: 'solid',
          width: '100rem',
        }}
      >
        <div
          className='card-body'
          style={{
            marginTop: '20px',
            fontSize: '15px',
            width: '110%',
            marginLeft: '25px',
            display: 'flex',

            marginBottom: '20px',
          }}
        >
          Join other industry-leading organizations pushing boundaries and
          solving problems in Figma
          <div style={{ fontSize: '45px', width: '35%', color: 'black' }}>
            <FaTwitter />
          </div>
          <div style={{ fontSize: '45px', width: '35%', color: 'black' }}>
            <BsFillCameraVideoFill />
          </div>
          <div style={{ fontSize: '45px', width: '35%' }}>
            <Link to='/action'>
              <BsFillArrowRightCircleFill
                style={{ textDecoration: 'none', color: 'black' }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
