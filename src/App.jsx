
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Button } from './components/ui/button'
import LandingPage from './pages/landing'
import AppLayot from './layouts/app-layout'
import { ThemeProvider } from './components/theme-provider'
import Onboarding from './pages/onboarding'
import JobListing from './pages/job-listing'
import JobPage from './pages/job'
import PostJob from './pages/post-job'
import SavedJobs from './pages/saved-jobs'
import MyJobs from './pages/my-jobs'

const router= createBrowserRouter([{
  
    element: <AppLayot/>,
    children: [
      {
       path: '/',
       element: <LandingPage/>
      },
        {
       path: '/onboarding',
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
  <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
  <RouterProvider router={router}/>
  </ThemeProvider>
  )
}

export default App
