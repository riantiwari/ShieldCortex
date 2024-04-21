// import React, { useState, useEffect } from 'react'

// import { getCoordsForAddress } from './Geolocation'


// import { Link } from 'react-router-dom'

<<<<<<< HEAD
// import { GoogleMap, useLoadScript, MarkerF, InfoWindowF, AdvancedMarkerF} from '@react-google-maps/api';
// // hi this a check
=======
import { GoogleMap, useLoadScript, MarkerF, InfoWindowF, AdvancedMarkerF} from '@react-google-maps/api';
>>>>>>> 55aac90f6b8dd3d9d19b96e99221e181ac2d6988

import './HomePage.css'

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

<<<<<<< HEAD
function HomePage() {
=======

function HomePage(){
  // checks if aps loaded in properly
>>>>>>> 55aac90f6b8dd3d9d19b96e99221e181ac2d6988
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCE2zGGFYmasHDNeJiFXzqtCyvoDs4IjOs',
    libraries,
  });

<<<<<<< HEAD
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
=======
  // functions to toggle the info window that displays marker information
  // will fill this arraylist with a malleable number of boolean vars initialized to false
  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(new Array(5).fill(false));
  const toggleInfoWindow = (index) => {
    setIsInfoWindowOpen(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const [coordinates, setCoordinates] = useState(null);


  // eventually will be used to read our json data and find the latitude and longitude of inputted string locations
  // useEffect(() => {
  //   // Call getCoordsForAddress with the desired address
  //   getCoordsForAddress('1600 Amphitheatre Parkway, Mountain View, California')
  //     .then(coords => {
  //       // Update state with the returned coordinates
  //       setCoordinates(coords);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching coordinates:', error);
  //   });
  // });

  if (loadError) {
    return <div>Error loading maps</div>;
  }
  if (!isLoaded) {
    return <div>Loading maps</div>;
  }


  return (
    <div>
      <div className='text'>
        <h1 className='title'>Welcome to ShieldCortex: Defense Contracting Mapper</h1>
        <h3 className='' id='variableParagraph'> 
          The goal of our project is to restore the faith of the American people in their DOD contracting system. 
          <br></br>
          <br></br>
          Below is a interactive map with markers designating where the major defense contracts from 
          the US government are taking the most effect.
        </h3>
      </div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={4.5}
        center={center}
      >

        {/* this is going to be the test marker for a test set of input coordinates */}
        {/* MARKER 1 */}
        <MarkerF 
          position={{
            lat: 42.1034,
            lng: -76.2622,
          }}
          icon={{
            url: icons.marker,
            scaledSize: new window.google.maps.Size(50, 50), // Adjust the size if needed
          }}
          onClick={() => toggleInfoWindow(0)}
          title={'Owego, New York'}
        />
        {/* this is the corresponding infowindow that will pop up when the corresponding marker is clicked */}
        {isInfoWindowOpen[0] && (
          <InfoWindowF 
          position={{
            lat: 42.1034,
            lng: -76.2622,
          }} 
            onCloseClick={() => toggleInfoWindow(0)}>
            <div>
              <h1 className='location'>Owego, New York</h1> 
              <h2 className='companyName'> Lockheed Martin </h2>
              <h2 className='branch'> Airforce</h2>
              <p className='contractInfo'> 
                $88,380,255
                <br></br>
                provides for overhaul of B-2 digital reciever and legacy defense message system.
              </p>
            </div>
          </InfoWindowF>
        )}


        {/* MARKER 2 */}
        <MarkerF 
          position={{
            lat: 34.0381,
            lng: -118.6923,
          }}
          icon={{
            url: icons.marker,
            scaledSize: new window.google.maps.Size(50, 50), // Adjust the size if needed
          }}
          onClick={() => toggleInfoWindow(1)}
          title={'DC test marker'}
        />
        {/* this is the corresponding infowindow that will pop up when the corresponding marker is clicked */}
        {isInfoWindowOpen[1] && (
          <InfoWindowF 
          position={{
            lat: 34.0381,
            lng: -118.6923,
          }} 
            onCloseClick={() => toggleInfoWindow(1)}>
            <div>
              <h1 className='location'> Malibu, California </h1> 
              <h2 className='companyName'> HRL Laboratories LLC </h2>
              <h2 className='branch'> Airforce </h2>
              <p className='contractInfo'> 
                $26,991,707
                <br></br>
                contract for creating arrays for strategic electro-opticals, proLiferated and exqusite (CASTLE) program
              </p>
            </div>
          </InfoWindowF>
        )}

        {/* MARKER 3 */}
        <MarkerF 
          position={{
            lat: 35.0489,
            lng: -106.5506,
          }}
          icon={{
            url: icons.marker,
            scaledSize: new window.google.maps.Size(50, 50), // Adjust the size if needed
          }}
          onClick={() => toggleInfoWindow(2)}
          title={'Philly test marker'}
        />
        {/* this is the corresponding infowindow that will pop up when the corresponding marker is clicked */}
        {isInfoWindowOpen[2] && (
          <InfoWindowF 
            position={{
              lat: 35.0489,
              lng: -106.5506,
            }} 
            onCloseClick={() => toggleInfoWindow(2)}>
            <div>
              <h1 className='location'>Kirtland Airforce Base, New Mexico</h1> 
              <h2 className='companyName'> Stellar Sciences LLC </h2>
              <h2 className='branch'> Airforce </h2>
              <p className='contractInfo'> 
                $24,940,816
                contract for modeling applications for next-tier initatives and capabilities of realistic engagements
              </p>
            </div>
          </InfoWindowF>
        )}

        {/* MARKER 4 */}
        <MarkerF 
          position={{
            lat: 40.6832,
            lng: 141.3690,
          }}
          icon={{
            url: icons.marker,
            scaledSize: new window.google.maps.Size(50, 50), // Adjust the size if needed
          }}
          onClick={() => toggleInfoWindow(3)}
          title={'Philly test marker'}
        />
        {/* this is the corresponding infowindow that will pop up when the corresponding marker is clicked */}
        {isInfoWindowOpen[3] && (
          <InfoWindowF 
          position={{
            lat: 40.6832,
            lng: 141.3690,
          }}
            onCloseClick={() => toggleInfoWindow(3)}>
            <div>
              <h1 className='location'>Misawa, Japan</h1> 
              <h2 className='companyName'> Northrop Grumman </h2>
              <h2 className='branch'> Navy </h2>
              <p className='contractInfo'> 
                $26,219,305
                cost-plus-fixed-fee-order against a previously issued basic ordering agreement
              </p>
            </div>
          </InfoWindowF>
        )}

        {/* MARKER 5 */}
        <MarkerF 
          position={{
            lat: 30.7881,
            lng: -91.3768,
          }}
          icon={{
            url: icons.marker,
            scaledSize: new window.google.maps.Size(50, 50), // Adjust the size if needed
          }}
          onClick={() => toggleInfoWindow(4)}
          title={'Philly test marker'}
        />
        {/* this is the corresponding infowindow that will pop up when the corresponding marker is clicked */}
        {isInfoWindowOpen[4] && (
          <InfoWindowF 
            position={{
              lat: 30.7881,
              lng: -91.3768,
            }}
            onCloseClick={() => toggleInfoWindow(4)}>
            <div>
              <h1 className='location'>St. Francisville, Louisianna</h1> 
              <h2 className='companyName'> Fordice Construction Co </h2>
              <h2 className='branch'> Army </h2>
              <p className='contractInfo'> 
                $21,900,000
                firm-fixed-price contract for casting articulated concrete mattress in the Mississippi river and tributaries.
              </p>
            </div>
          </InfoWindowF>
        )}

        {/* MARKER 6 */}
        <MarkerF 
          position={{
            lat: 42.5047,
            lng: -71.1956,
          }}
          icon={{
            url: icons.marker,
            scaledSize: new window.google.maps.Size(50, 50), // Adjust the size if needed
          }}
          onClick={() => toggleInfoWindow(5)}
          title={'Philly test marker'}
        />
        {/* this is the corresponding infowindow that will pop up when the corresponding marker is clicked */}
        {isInfoWindowOpen[5] && (
          <InfoWindowF 
            position={{
              lat: 42.5047,
              lng: -71.1956,
            }} 
            onCloseClick={() => toggleInfoWindow(5)}>
            <div>
              <h1 className='location'>Burlington, Massachusetts</h1> 
              <h2 className='companyName'> BAE Systems Info and Electronics Systems </h2>
              <h2 className='branch'> Defense Advanced Research Projects Agency </h2>
              <p className='contractInfo'> 
                $12,008,850
                cost-plus-fixed-fee contract to support the Strategic Chaos Engine for Planning, Tactics, Experimentation and Resiliency program
              </p>
            </div>
          </InfoWindowF>
        )}

>>>>>>> 55aac90f6b8dd3d9d19b96e99221e181ac2d6988
      </GoogleMap>
    </div>
  );
};

export default HomePage;
