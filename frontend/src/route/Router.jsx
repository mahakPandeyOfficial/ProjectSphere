
import Home from '../pages/Home'
import Services from '../pages/Services'
import About from '../pages/About'
import Projects from '../pages/Projects'
import Feedback from '../pages/Feedback'
import Contact from '../pages/Contact'
import ProjectDetails from '../pages/ProjectDetails'
import Admin from '../pages/Admin'

import { Route, Routes } from 'react-router-dom'
function Router() {
  return <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/home' element={<Home />} />
    <Route path='/services' element={<Services />} />
    <Route path='/about' element={<About />} />
    <Route path='/feedback' element={<Feedback />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/projects' element={<Projects />} />
    <Route path='/projects/:id' element={<ProjectDetails />} />
    <Route path='/admin' element={<Admin />} />
  </Routes>
}

export default Router