import React, {useState, useEffect} from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import {createRoot} from 'react-dom/client';
import { Link, useLocation} from "react-router-dom"

//import {APIProvider, Map} from '@vis.gl/react-google-maps';
//import ControlPanel from './control-panel';

//home page with all content
import HomePage from "./pages/HomePage"

function App() {
  return (   
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/*<Route path="/additional-page" element={<additional-page/>} /> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App



{/*
function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience/>} />
          </Routes>
        </Router>
      </div>
  )
}

export default App

*/}
