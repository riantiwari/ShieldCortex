// import React, { useState, useEffect } from 'react'

// import { getCoordsForAddress } from './Geolocation'


// import { Link } from 'react-router-dom'

// import { GoogleMap, useLoadScript, MarkerF, InfoWindowF, AdvancedMarkerF} from '@react-google-maps/api';
// // hi this a check


// // specified coordinates
// // const getCoordsForAddress = require('../util/Geolocation')

// // const getCoordsForAddress = require('./Geolocation')

// const id = 0;

// const libraries = ['places'];
// const mapContainerStyle = {
//   width: '100vw',
//   height: '100vh',
// };
// // D.C. coordinates
// const center = {
//   lat: 38.9072, // default latitude
//   lng: -77.0369, // default longitude
// };

// const testInput = {
//   lat: 40,
//   lng: -75,
// }

// const icons = {
//   marker: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
// }




// function HomePage(){
//   // checks if aps loaded in properly
//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: 'AIzaSyCE2zGGFYmasHDNeJiFXzqtCyvoDs4IjOs',
//     libraries,
//   });

//   // functions to toggle the info window that displays marker information
//   const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(new Array(2).fill(false));
//   const toggleInfoWindow = (index) => {
//     setIsInfoWindowOpen(prevState => {
//       const newState = [...prevState];
//       newState[index] = !newState[index];
//       return newState;
//     });
//   };

//   const [coordinates, setCoordinates] = useState(null);

//   useEffect(() => {
//     // Call getCoordsForAddress with the desired address
//     getCoordsForAddress('1600 Amphitheatre Parkway, Mountain View, CA')
//       .then(coords => {
//         // Update state with the returned coordinates
//         setCoordinates(coords);
//       })
//       .catch(error => {
//         console.error('Error fetching coordinates:', error);
//     });
//   });

//   if (loadError) {
//     return <div>Error loading maps</div>;
//   }
//   if (!isLoaded) {
//     return <div>Loading maps</div>;
//   }

//   const latitudeInput = coordinates ? coordinates.lat : null;
//   const longitudeInput = coordinates ? coordinates.lng : null;

//   return (
//     <div>
//       <div>
//         <h1 className='title'>Welcome to ShieldCortex: Defense Contracting Mapper</h1>
//         <h3 className=''> 
//           The goal of our project is to restore the faith of the American people in their DOD contracting system. 
//           <br></br>
//           <br></br>
//           Below is a interactive map with markers designating where the major defense contracts from 
//           the US government are taking the most effect.
//         </h3>
//       </div>
//       <GoogleMap
//         mapContainerStyle={mapContainerStyle}
//         zoom={10}
//         center={center}
//       >

//         {/* this is going to be the test marker for a test set of input coordinates */}
//         {/* MARKER 1 */}
//         <MarkerF 
//           position={testInput}
//           icon={{
//             url: icons.marker,
//             scaledSize: new window.google.maps.Size(50, 50), // Adjust the size if needed
//           }}
//           // onClick={() => alert("Latitude: " + testInput.lat + "\nLongitude: " + testInput.lng)}
//           onClick={() => toggleInfoWindow(0)}
//           title={'Philly test marker'}
//         />
//         {/* this is the corresponding infowindow that will pop up when the corresponding marker is clicked */}
//         {isInfoWindowOpen[0] && (
//           <InfoWindowF position={testInput} onCloseClick={() => toggleInfoWindow(0)}>
//             <div>
//               <h1 className='location'>Philadelphia</h1> 
//               <h2 className='companyName'> Lockheed Martin </h2>
//               <h2 className='branch'> Army Branch</h2>
//               <p className='contractInfo'> 
//                 test info about this goofy ahh contract
//               </p>
//             </div>
//           </InfoWindowF>
//         )}


//         {/* MARKER 2 */}
//         <MarkerF 
//           position={center}
//           icon={{
//             url: icons.marker,
//             scaledSize: new window.google.maps.Size(50, 50), // Adjust the size if needed
//           }}
//           onClick={() => toggleInfoWindow(1)}
//           title={'DC test marker'}
//         />
//         {/* this is the corresponding infowindow that will pop up when the corresponding marker is clicked */}
//         {isInfoWindowOpen[1] && (
//           <InfoWindowF position={center} onCloseClick={() => toggleInfoWindow(1)}>
//             <div>
//               <h1 className='location'> Washington D.C.</h1> 
//               <h2 className='companyName'> Northrup Rummond </h2>
//               <h2 className='branch'> Navy Seal Branch bih</h2>
//               <p className='contractInfo'> 
//                 yessuhhhhh more info yessuh
//               </p>
//             </div>
//           </InfoWindowF>
//         )}

//       </GoogleMap>
//     </div>
//   );
// };

// export default HomePage;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GoogleMap, useLoadScript, MarkerF, InfoWindowF } from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};
const center = {
  lat: 38.9072,
  lng: -77.0369,
};
const icons = {
  marker: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
};

function HomePage() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCE2zGGFYmasHDNeJiFXzqtCyvoDs4IjOs',
    libraries,
  });

  const [markers, setMarkers] = useState([]);
  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState({});

  const toggleInfoWindow = (id) => {
    setIsInfoWindowOpen(prevState => ({ ...prevState, [id]: !prevState[id] }));
  };

  // Fetch and parse CSV data when component mounts
  useEffect(() => {
    fetch('/data/conInfo.csv')
      .then(response => response.text())
      .then(data => {
        const lines = data.split('\n').slice(1); // Skip header
        const parsedData = lines.map((line, index) => {
          const [contractor, location, money, synopsis] = line.split(',');
          const coords = location.split(' '); // Assuming 'location' is in "lat lng" format
          return {
            id: index,
            contractor,
            lat: parseFloat(coords[0]),
            lng: parseFloat(coords[1]),
            money,
            synopsis
          };
        });
        setMarkers(parsedData);
      })
      .catch(error => console.error('Error loading CSV data:', error));
  }, []);

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <div>
      <h1 className='title'>Welcome to Shield Cortex: Defense Contracting Mapper</h1>
      <h3 className=''>
        The goal of our project is to restore the faith of the American people in their DOD contracting system.
        <br />
        Below is an interactive map with markers designating where the major defense contracts from the US government are taking the most effect.
      </h3>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={5} // Adjust zoom as necessary
        center={center}
      >
        {markers.map(marker => (
          <MarkerF
            key={marker.id}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={{
              url: icons.marker,
              scaledSize: new window.google.maps.Size(50, 50),
            }}
            onClick={() => toggleInfoWindow(marker.id)}
            title={`${marker.contractor} - ${marker.synopsis}`}
          >
            {isInfoWindowOpen[marker.id] && (
              <InfoWindowF onCloseClick={() => toggleInfoWindow(marker.id)}>
                <div>
                  <h1 className='location'>{marker.location}</h1>
                  <h2 className='companyName'>{marker.contractor}</h2>
                  <p className='contractInfo'>{marker.synopsis}</p>
                </div>
              </InfoWindowF>
            )}
          </MarkerF>
        ))}
      </GoogleMap>
    </div>
  );
};

export default HomePage;
