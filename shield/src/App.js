import React, {useState, useEffect} from 'react'

import {createRoot} from 'react-dom/client';
import { Routes } from './Routes'
import { Link, useLocation} from "react-router-dom"

//import {APIProvider, Map} from '@vis.gl/react-google-maps';
//import ControlPanel from './control-panel';

import MapPage from "./pages/MapPage"
import HomePage from "./pages/HomePage"
//different web pages are being imported

//const API_KEY = globalThis.GOOGLE_MAPS_API_KEY ?? (process.env.GOOGLE_MAPS_API_KEY as string);



function App() {

  return (   
    <Routes />
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
