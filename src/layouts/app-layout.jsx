import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayot = () => {
  return (
    <div>
    <div className='grid-background'></div>
    <Outlet/>
    </div>
  )
}

export default AppLayot

