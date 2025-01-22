
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Button } from './components/ui/button'
import LandingPage from './pages/landing'
import AppLayot from './layouts/app-layout'

const router= createBrowserRouter([{
  
    element: <AppLayot/>,
    children: [
      {
       path: '/',
       element: <LandingPage/>
      },
        {
       path: '/onborading',
       element: <Onboarding/>
      },
           {
       path: '/jobs',
       element: <JobListing/>
      },
         {
       path: '/job/:id',
       element: <JobPage/>
      },
         {
       path: '/post-job',
       element: <PostJob/>
      },
         {
       path: '/saved-job',
       element: <SavedJobs/>
      },
       {
       path: '/my-jobs',
       element: <MyJobs/>
      },
    ]
}])

function App() {
  return (
  <RouterProvider router={router}/>
  )
}

export default App
