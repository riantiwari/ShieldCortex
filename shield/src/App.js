import React, {UseState, useEffect} from 'react'

import {createRoot} from 'react-dom/client';
import  { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Link, useLocation} from "react-router-dom"

//import {APIProvider, Map} from '@vis.gl/react-google-maps';
//import ControlPanel from './control-panel';

import MapPage from "./pages/MapPage"
import HomePage from "./pages/HomePage"
//different web pages are being imported

//const API_KEY = globalThis.GOOGLE_MAPS_API_KEY ?? (process.env.GOOGLE_MAPS_API_KEY as string);

function App() {
  return (
    <div>
      <h1>Welcome to ShieldCortex: Defense Contracting Mapper</h1>
      <h1>Doglinfd</h1>
      <h1> practice this is jeff's edit</h1>
      <h2> practice this is jack's edit</h2>.

      {/*button for the map */}

  
      {/*provides links for the different routes*/}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mappage" element={<MapPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
