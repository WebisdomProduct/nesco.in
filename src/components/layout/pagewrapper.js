import React from 'react'
import Navbar from './navbar/Navbar'

function Pagewrapper({children}) {
  return (
    <div>
        <Navbar/>

        {children}
    </div>
  )
}

export default Pagewrapper