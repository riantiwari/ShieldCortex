import React from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import HomePage from ".pages/HomePage"
import MapPage from ".pages/MapPage"


function Routes() {
  return (
    <Router>
        <Routes>
            <Route path="/">
                HomePage
            </Route>
        </Routes>
    </Router>
  )
}

export default Routes