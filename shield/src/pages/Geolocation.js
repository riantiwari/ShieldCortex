import React, { useState, useEffect } from 'react'

import HttpError from '../util/http-error'

// const axios = require('axios')
import axios from 'axios'



const API_KEY = 'API_KEY_2'

export async function getCoordsForAddress(address){
    const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${API_KEY}`
    );

    const data = await response.data;
    
    if (!data || data.status === 'ZERO_RESULTS') {
        if(typeof address === undefined){
            const error = new HttpError('Address is undefined.', 422);
            throw error;
        } else {
            const error = new HttpError('Could not find location for specified address. ', 422);
            throw error;
        }
    }

    const coordinates = data.results[0].geometry.location;
    // console.log(data.results[0]);
    // console.log("Address: " + address + "\ncoords: " + JSON.stringify(coordinates));
    return coordinates;
}





// function Geolocation() {
//     const [locationData, setLocationData] = useState(null);
  
//     useEffect(() => {
//       // Fetch data from the API endpoint
//       fetch('https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyCE2zGGFYmasHDNeJiFXzqtCyvoDs4IjOs')
//         .then(response => response.json())
//         .then(data => {
//           // Update state with the fetched data
//           setLocationData(data);
//         })
//         .catch(error => {
//           console.error('Error fetching data:', error);
//         });
//     }, []); // Empty dependency array ensures the effect runs only once on component mount




//   return (
//     <div>
//         <h1>Geocoding Data</h1>
//         {locationData ? (
//             <div>
//             <p>Latitude: {locationData.results[0].geometry.location.lat}</p>
//             <p>Longitude: {locationData.results[0].geometry.location.lng}</p>
//             </div>
//         ) : (
//             <p>Loading...</p>
//         )}
//     </div>
//   )
// }

// export default Geolocation