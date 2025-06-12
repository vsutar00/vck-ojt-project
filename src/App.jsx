import React from 'react'
import {Route,BrowserRouter as Router,Routes} from 'react-router-dom'
import Home from './Pages/HomePage'
import About from './Pages/AboutPage'
import Courses from './Pages/CoursesPage'
import Contact from './Pages/ContactPage'
import Admission from './Pages/AdmissionPage'
import ChatbotComponent from './Component/ChatBot/ChatbotComponents'



const App = () => {
  return(
    <Router>
      <Routes>
        <Route path ="/" element={<Home/>}/>
          <Route path ="/homepage" element={<Home/>}/>
            <Route path ="/aboutpage" element={<About/>}/>
              <Route path ="/coursespage" element={<Courses/>}/>
               <Route path ="/contactpage" element={<Contact/>}/>
                     <Route path ="/admissionpage" element={<Admission/>}/>


      </Routes>
      <ChatbotComponent/>
    </Router>

  );
};
export default App 