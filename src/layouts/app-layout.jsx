import Header from '@/components/header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayot = () => {
  return (
    <div>
    <div className='grid-background'></div>
    <main className='min-h-screen container'>
        <Header/>
     <Outlet/>
     <div>
        Made with ❤️ by Bben95
     </div>
    </main>
    
    </div>
  )
}

export default AppLayot

