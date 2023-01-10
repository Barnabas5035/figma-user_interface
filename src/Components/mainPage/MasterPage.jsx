import React from 'react'

import Footer from '../Footer'
import Navbar from '../Navbar'

const MasterPage = ({ children }) => {
  return (
    <div>
      <Navbar />

      <div>{children}</div>

      <Footer />
    </div>
  )
}

export default MasterPage
